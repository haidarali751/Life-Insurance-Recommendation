import { Request, Response } from "express";
import "../db";
import { Submission } from "../models";
import getRecommendation from "../services/recommendation.service";

export async function createRecommendation(req: Request, res: Response) {
  try {
    let { age, income, dependents, risk } = req.body;
    age = Number(age);
    income = Number(income);
    dependents = Number(dependents);

    if (
      !Number.isInteger(age) ||
      age < 18 ||
      age > 100 ||
      !Number.isFinite(income) ||
      income < 0 ||
      !Number.isInteger(dependents) ||
      dependents < 0 ||
      typeof risk !== "string" ||
      !["Low", "Medium", "High"].includes(risk)
    ) {
      return res
        .status(400)
        .json({ error: "Invalid input. Please check your values." });
    }

    const { recommendation, explanation } = getRecommendation(age, risk);

    await Submission.query().insert({
      age,
      income,
      dependents,
      risk_tolerance: risk,
      recommendation,
      explanation,
    });

    res.status(200).json({ recommendation, explanation });
  } catch (err: any) {
    if (err?.name === "ValidationError") {
      return res.status(400).json({ error: "Validation failed." });
    }
    res
      .status(500)
      .json({ error: "Failed to save submission. Please try again later." });
  }
}

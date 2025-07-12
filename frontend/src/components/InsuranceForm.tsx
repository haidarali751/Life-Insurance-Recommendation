"use client";
import { useState } from "react";
import axios from "axios";
import Input from "./ui/Input";
import Select from "./ui/Select";
import Button from "./ui/Button";

const riskOptions = ["Low", "Medium", "High"];

export default function InsuranceForm() {
  const [form, setForm] = useState({
    age: "",
    income: "",
    dependents: "",
    risk: "Low",
  });
  const [submitted, setSubmitted] = useState(false);
  const [recommendation, setRecommendation] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.age ||
      Number(form.age) < 18 ||
      Number(form.age) > 100 ||
      !form.income ||
      Number(form.income) < 0 ||
      !form.dependents ||
      Number(form.dependents) < 0
    ) {
      setRecommendation("");
      setExplanation("Please enter valid values for all fields.");
      setSubmitted(true);
      return;
    }
    setLoading(true);
    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const res = await axios.post(
        `${apiBaseUrl}/recommendation`,
        {
          age: Number(form.age),
          income: Number(form.income),
          dependents: Number(form.dependents),
          risk: form.risk,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setRecommendation(res.data.recommendation);
      setExplanation(res.data.explanation);
      setSubmitted(true);
    } catch (err: any) {
      setRecommendation("");
      setExplanation(
        err?.response?.data?.error || "Error fetching recommendation."
      );
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 drop-shadow">
        Life Insurance Recommendation
      </h1>
      {!submitted ? (
        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Age"
              name="age"
              type="number"
              value={form.age}
              onChange={handleChange}
              min={18}
              max={100}
              required
              placeholder="Enter your age"
              className="placeholder-gray-500 text-gray-900"
            />
            <Input
              label="Income"
              name="income"
              type="number"
              value={form.income}
              onChange={handleChange}
              min={0}
              required
              placeholder="Enter your income"
              className="placeholder-gray-500 text-gray-900"
            />
            <Input
              label="Number of Dependents"
              name="dependents"
              type="number"
              value={form.dependents}
              onChange={handleChange}
              min={0}
              required
              placeholder="Enter number of dependents"
              className="placeholder-gray-500 text-gray-900"
            />
            <Select
              label="Risk Tolerance"
              name="risk"
              value={form.risk}
              onChange={handleChange}
              options={riskOptions}
            />
          </div>
          <Button className="cursor-pointer" type="submit" loading={loading}>
            Get Recommendation
          </Button>
        </form>
      ) : (
        <div className="text-center w-full flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">
            Recommendation
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-2 w-full max-w-md">
            <p className="text-lg font-bold text-blue-900 mb-1">
              {recommendation}
            </p>
            <p className="text-gray-700 text-base">{explanation}</p>
          </div>
          <button
            className="mt-6 text-blue-600 underline font-medium hover:text-blue-800 cursor-pointer"
            onClick={() => setSubmitted(false)}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}

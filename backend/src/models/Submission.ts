import { Model } from "objection";

export class Submission extends Model {
  // Objection.js model for submissions table
  id!: number;
  age!: number;
  income!: number;
  dependents!: number;
  risk_tolerance!: string;
  recommendation!: string;
  explanation!: string;
  created_at!: string;

  static get tableName() {
    return "submissions";
  }
}

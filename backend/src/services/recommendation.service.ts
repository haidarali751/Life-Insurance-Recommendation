export default function getRecommendation(age: number, risk: string) {
  if (age < 40 && risk === "High") {
    return {
      recommendation: "Term Life – $500,000 for 20 years",
      explanation:
        "You are young and have high risk tolerance, so term life is recommended.",
    };
  }
  if (age < 40) {
    return {
      recommendation: "Term Life – $250,000 for 20 years",
      explanation: "You are young, so term life is recommended.",
    };
  }
  if (risk === "Low") {
    return {
      recommendation: "Whole Life – $100,000",
      explanation: "Low risk tolerance favors whole life insurance.",
    };
  }
  return {
    recommendation: "Term Life – $100,000 for 10 years",
    explanation: "Default recommendation based on your inputs.",
  };
}

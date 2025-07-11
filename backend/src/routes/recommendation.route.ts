import { Router } from "express";
import { createRecommendation } from "../controllers";

const router = Router();

router.post("/", createRecommendation);

export default router;

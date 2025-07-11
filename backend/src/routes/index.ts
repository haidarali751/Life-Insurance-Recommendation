import { Router } from "express";
import recommendationRouter from "./recommendation.route";

const router = Router();

router.use("/recommendation", recommendationRouter);

export default router;

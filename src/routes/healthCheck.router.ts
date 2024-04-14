import express from "express";
import healthCheckController from "../controllers/healthCheck.controller";

const router = express.Router();

router.post("/health", healthCheckController.healthCheck);

export default router;

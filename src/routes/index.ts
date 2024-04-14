import { Router } from "express";
import healthCheck from "./healthCheck.router";

const router = Router();

router.use("/healthCheck", healthCheck);

export default router;

import { Router } from "express";
import healthCheck from "./healthCheck.router";
import categoryRoute from "./category.route";

const router = Router();

router.use("/healthCheck", healthCheck);
router.use("/category", categoryRoute);

export default router;

import { Router } from "express";
import healthCheck from "./healthCheck.router";
import adminRouter from "./admin.route";
import categoryRouter from "./category.route";
import subcategoryRouter from "./subcategories.route";
import contentRouter from "./content.route";

const router = Router();

router.use("/healthCheck", healthCheck);
router.use("/category", categoryRouter);
router.use("/admin", adminRouter);
router.use("/subcategory", subcategoryRouter);
router.use("/content", contentRouter);

export default router;

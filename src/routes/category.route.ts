import express from "express";
import categoryController from "../controllers/category.controller";

const router = express.Router();

router.post("/getAdminCategories", categoryController.getUserCategory);
router.post("/addAdminCategory", categoryController.addAdminCategory);
router.post("/updateAdminCategory", categoryController.updateAdminCategory);
router.post("/deleteAdminCategory", categoryController.deleteAdminCategory);
router.post("/getSingleCategory", categoryController.getAdminSingleCategory);
router.post(
  "/getCustomerCategories",
  categoryController.getCustomerAllCategories
);
router.post(
  "/getCustomerCategoryOptions",
  categoryController.getCustomerCategoryOptions
);

export default router;

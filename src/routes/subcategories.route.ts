import express from "express";
import subcategoryController from "../controllers/subcategory.controller";

const router = express.Router();

router.post(
  "/getAllAdminSubcategories",
  subcategoryController.getAllAdminSubcategories
);
router.post(
  "/getCustomerSubcategories",
  subcategoryController.getCustomerSubcategories
);
router.post(
  "/getSingleSubcategory",
  subcategoryController.getSingleSubcategory
);
router.post(
  "/getSubcategoriesOptions",
  subcategoryController.getSubcategoriesOptions
);
router.post("/updateSucategory", subcategoryController.updateSucategory);
router.post("/deleteSubcategory", subcategoryController.deleteSubcategory);
router.post("/addSubcategory", subcategoryController.addSubcategory);

export default router;

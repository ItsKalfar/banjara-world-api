import express from "express";
import categoryController from "../controllers/category.controller"; 

const router = express.Router();

router.post("/getCategories", categoryController.getUserCategory);

export default router;
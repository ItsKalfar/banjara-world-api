import express from "express";
import sellerController from "../controllers/seller.controller";

const router = express.Router();

router.post("/signIn", sellerController.signIn);
router.post("/signUp", sellerController.signUp);
router.post("/deleteProfile", sellerController.deleteProfile);
router.post("/updateProfile", sellerController.updateProfile);

export default router;

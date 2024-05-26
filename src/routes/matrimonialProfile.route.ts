import express from "express";
import matrimonialProfileController from "../controllers/matrimonialProfile.controller";

const router = express.Router();

router.post("/createProfile", matrimonialProfileController.createProfile);
router.post("/updateProfile", matrimonialProfileController.updateProfile);
router.post("/deleteProfile", matrimonialProfileController.deleteProfile);
router.post("/getAllProfiles", matrimonialProfileController.getAllProfiles);
router.post(
  "/getProfileDetails",
  matrimonialProfileController.getProfileDetails
);
router.post("/likeProfile", matrimonialProfileController.likeProfile);

export default router;

import express from "express";
import adminController from "../controllers/admin.controller";

const router = express.Router();

router.post("/getAllAdmins", adminController.getAllAdminsList);
router.post("/adminSignIn", adminController.adminSignIn);
router.post("/addAdmin", adminController.addNewAdmin);
router.post("/updateAdmin", adminController.updateAdmin);
router.post("/deleteAdmin", adminController.deleteAdmin);
router.post("/getSingleAdmin", adminController.getSingleAdmin);

export default router;

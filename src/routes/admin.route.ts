import express from "express";
import adminController from "../controllers/admin.controller";

const router = express.Router();

router.post("/getAllAdmins", adminController.getAllAdminsList);
router.post("/adminSignIn", adminController.adminSignIn);
router.post("/addAdmin", adminController.addNewAdmin);
router.post("/updateAdmin", adminController.updateAdmin);
router.post("/deleteAdmin", adminController.deleteAdmin);
router.post("/getSingleAdmin", adminController.getSingleAdmin);
router.post("/getAllCustomers", adminController.getAllCustomers);
router.post("/getSingleCustomer", adminController.getSingleCustomer);
router.post("getAllSellers", adminController.getAllSellers);
router.post("/getSingleController", adminController.getSingleSeller);

export default router;

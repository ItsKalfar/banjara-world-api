import customerController from "../controllers/customer.controller";
import express from "express";

const router = express.Router();

router.post("/signIn", customerController.signIn);
router.post("/signUp", customerController.signUp);
router.post("/sendOtp", customerController.sendOtp);
router.post("/verifyOtp", customerController.verifyOtp);
router.post("/resendOtp", customerController.resendOtp);
router.post("/resetPassword", customerController.resetPassword);
router.post("/forgotPassword", customerController.forgotPassword);
router.post("/updateCustomerDetails", customerController.updateCustomerDetails);
router.post("/addAddress", customerController.addAddress);
router.post("/updateAddress", customerController.updateAddress);
router.post("/deleteAddress", customerController.deleteAddress);
router.post("/deleteAccount", customerController.deleteAccount);
router.post(
  "/getAllAddressesOfCustomer",
  customerController.getAllAddressesOfCustomer
);
router.post("/getCustomerDetails", customerController.getCustomerDetails);

export default router;

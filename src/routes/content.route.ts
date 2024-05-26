import express from "express";
import contentController from "../controllers/content.controller";

const router = express.Router();

router.post("/getAllAdminContent", contentController.getAllAdminContent);
router.post("/getAllCustomerContent", contentController.getAllCustomerContent);
router.post("/getSingleContent", contentController.getSingleContent);
router.post("/addContent", contentController.addContent);
router.post("/updateContent", contentController.updateContent);
router.post("/deleteContent", contentController.deleteContent);

export default router;

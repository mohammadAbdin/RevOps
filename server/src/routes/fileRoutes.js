import express from "express";
import { getFileContent } from "../controllers/files/getFileContentController.js";
const router = express.Router();

router.get("/content/:projectId", getFileContent);

export default router;

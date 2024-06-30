// server/src/routes/authRoutes.js
import express from "express";
import { addProject } from "../controllers/projects/addProjectController.js";
const router = express.Router();
router.post("/add-project", addProject);
// router.get("/protectedRoute", protectedRoute, getUserAfterTokens);

export default router;

// server/src/routes/authRoutes.js
import express from "express";
import { addProject } from "../controllers/projects/addProjectController.js";
import { getProjectsByUserId } from "../controllers/projects/getProjectsByUserIdController.js";
import { getAllProjects } from "../controllers/projects/getAllProjectsController.js";
import { getProjectsToDo } from "../controllers/projects/getProjectsToDoController.js";
const router = express.Router();
router.post("/add-project", addProject);
router.get("/user/:userId", getProjectsByUserId);
router.get("/allProjects", getAllProjects);
router.get("/Projects-to-do", getProjectsToDo);

export default router;

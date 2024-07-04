import express from "express";
import { addProject } from "../controllers/projects/addProjectController.js";
import { addFeedBackAndEdits } from "../controllers/projects/addFeedBackAndEditsController.js";
import { getProjectsByUserId } from "../controllers/projects/getProjectsByUserIdController.js";
import { getAllProjects } from "../controllers/projects/getAllProjectsController.js";
import { getProjectsToDo } from "../controllers/projects/getProjectsToDoController.js";
import { deleteProjectById } from "../controllers/projects/deleteProjectById.js";
import { updateProjectStatus } from "../controllers/projects/updateProjectStatusController.js";
import { publishProject } from "../controllers/projects/publishProjectController.js";

const router = express.Router();
router.post("/add-project", addProject);
router.post("/add-feedback-and-edits", addFeedBackAndEdits);
router.get("/user/:userId", getProjectsByUserId);
router.get("/allProjects", getAllProjects);
router.get("/Projects-to-do", getProjectsToDo);
router.put("/update-project-status/:_id", updateProjectStatus);
router.put("/publish-project/:_id", publishProject);
router.delete("/delete-project/:id", deleteProjectById);

export default router;

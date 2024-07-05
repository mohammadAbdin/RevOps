import express from "express";
import { addProject } from "../controllers/projects/addProjectController.js";
import { addFeedBackAndEdits } from "../controllers/projects/addFeedBackAndEditsController.js";
import { getProjectsByUserId } from "../controllers/projects/getProjectsByUserIdController.js";
import { getProjectsByTag } from "../controllers/projects/getProjectsByTagController.js";
import { getProjectsToDo } from "../controllers/projects/getProjectsToDoController.js";
import { getCompletedProjects } from "../controllers/projects/getCompletedProjectsController.js";
import { getAllProjects } from "../controllers/projects/getAllProjectsController.js";
import { deleteProjectById } from "../controllers/projects/deleteProjectById.js";
import { updateProjectStatus } from "../controllers/projects/updateProjectStatusController.js";
import { updateProjectViews } from "../controllers/projects/updateProjectViewsController.js";
import { publishProject } from "../controllers/projects/publishProjectController.js";

const router = express.Router();
router.post("/add-project", addProject);
router.post("/add-feedback-and-edits", addFeedBackAndEdits);
router.get("/user/:userId", getProjectsByUserId);
router.get("/projects-by-tag", getProjectsByTag);
router.get("/all-completed-Projects", getCompletedProjects);
router.get("/all-Projects", getAllProjects);
router.get("/Projects-to-do", getProjectsToDo);
router.put("/update-project-status/:_id", updateProjectStatus);
router.put("/update-project-views/:_id", updateProjectViews);
router.put("/publish-project/:_id", publishProject);
router.delete("/delete-project/:id", deleteProjectById);

export default router;

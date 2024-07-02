import express from "express";
import { getGitHubProject } from "../controllers/admin/getGitHubProjectController.js";
import { getGitHubProjectInternalFolder } from "../controllers/admin/getGitHubProjectInternalFolderController.js";
const router = express.Router();

router.get("/gitHub/review/:projectId", getGitHubProject);
router.get("/gitHub/folder/:url", getGitHubProjectInternalFolder);

export default router;

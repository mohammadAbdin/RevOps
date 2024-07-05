import Project from "../../models/projectModel.js";
import { getGithubFoldersAndFiles } from "../../logic/getGithubFolders&Files.js";
export const getGitHubProject = async (req, res) => {
  const { projectId } = req.params;

  try {
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: "Project not found." });
    }
    const { githubUri, commitIndex } = project;
    const foldersAndFiles = await getGithubFoldersAndFiles(
      githubUri,
      commitIndex
    );

    res
      .status(200)
      .json({ foldersAndFiles: foldersAndFiles, project: project });
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

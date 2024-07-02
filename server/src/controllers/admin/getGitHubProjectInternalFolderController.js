import { getGithubInsideFoldersAndFiles } from "../../logic/getGithubInsideFoldersAndFiles.js";
export const getGitHubProjectInternalFolder = async (req, res) => {
  console.log("hi");
  const { url } = req.params;
  const decodedUrl = decodeURIComponent(url);

  console.log("url", decodedUrl);
  try {
    const foldersAndFiles = await getGithubInsideFoldersAndFiles(decodedUrl);

    if (!foldersAndFiles) {
      return res.status(404).json({ message: "Project not found." });
    }
    res.status(200).json({ foldersAndFiles: foldersAndFiles });
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

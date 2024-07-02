import { getFileContentRequest } from "../../logic/getFileContentRequest.js";
export const getFileContent = async (req, res) => {
  const { url } = req.params;

  try {
    const foldersAndFiles = await getFileContentRequest(url);
    res.status(200).json({ foldersAndFiles: foldersAndFiles });
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

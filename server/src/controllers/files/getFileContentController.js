import { getFileContentRequest } from "../../logic/getFileContentRequest.js";
export const getFileContent = async (req, res) => {
  const { encodedUrl } = req.params;
  // const url = decodeURIComponent(encodedUrl);

  try {
    const file = await getFileContentRequest(encodedUrl);
    res.status(200).json(file);
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

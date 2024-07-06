import { getFileContentRequest } from "../../logic/getFileContentRequest.js";
import decodeBase64 from "../../logic/getDecodedString.js";
export const getFileContent = async (req, res) => {
  const { encodedUrl } = req.params;

  try {
    const file = await getFileContentRequest(encodedUrl);
    console.log(file);
    file.content = decodeBase64(file.content);
    res
      .status(200)
      .json({ content: file.content, sha: file.sha, url: file.url });
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
// GET /file/content/https%3A%2F%2Fapi.github.com%2Frepos%2FmohammadAbdin%2FRevOps%2Fgit%2Fblobs%2F328b7b29b118b26d4ae09b19050ba8d815473ca6 500 3.752 ms - 51

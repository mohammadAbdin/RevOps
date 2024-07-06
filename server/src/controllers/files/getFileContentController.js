import { getFileContentRequest } from "../../logic/getFileContentRequest.js";
import decodeBase64 from "../../logic/getDecodedString.js";
export const getFileContent = async (req, res) => {
  const { encodedUrl } = req.params;

  try {
    const file = await getFileContentRequest(encodedUrl);

    file.content = decodeBase64(file.content);
    res
      .status(200)
      .json({ content: file.content, sha: file.sha, url: file.url });
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

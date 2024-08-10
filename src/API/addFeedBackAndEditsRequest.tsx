import axios from "axios";
import { AdminContentType } from "../Pages/Admin/displayFile/DisplayFile";
export const addFeedBackAndEditsRequest = async (
  fileName: string,
  adminContent: AdminContentType | undefined,
  feedBack: string,
  projectId: string
) => {
  try {
    // h/ttps://rev-ops-code-review-site.onrender.com/
    const response = await axios.post(
      `https://rev-ops-code-review-site.onrender.com/Project/add-feedback-and-edits`,
      {
        fileName,
        adminContent,
        feedBack,
        projectId,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error adding feedback and edits:", error);
  }
};

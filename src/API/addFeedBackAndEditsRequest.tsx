import axios from "axios";
import { AdminContentType } from "../Pages/Admin/displayFile/DisplayFile";
export const addFeedBackAndEditsRequest = async (
  fileName: string,
  adminContent: AdminContentType | undefined,
  feedBack: string,
  projectId: string
) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/Project/add-feedback-and-edits`,
      {
        fileName,
        adminContent,
        feedBack,
        projectId,
      }
    );

    console.log("Backend response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding feedback and edits:", error);
  }
};

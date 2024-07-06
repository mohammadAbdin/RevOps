import axios from "axios";
import { GitHubProjectResponse } from "../Types/GithubProjectRequestReturnType";

export const getGitHubProjectForReviewingRequest = async (
  projectId: string | undefined
): Promise<GitHubProjectResponse | null> => {
  try {
    if (!projectId) {
      console.error("Project ID is undefined.");
      return null;
    }

    const response = await axios.get<GitHubProjectResponse>(
      `http://localhost:5000/Admin/gitHub/review/${projectId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // Include if your server requires credentials
      }
    );

    console.log("result", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(
          "Failed to fetch project for reviewing:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    } else {
      console.error("Unexpected Error:", error);
    }
    return null;
  }
};

import axios from "axios";
import { GitHubProjectResponse } from "../Types/GithubProjectRequestReturnType";

export const getGitHubProjectInternalForReviewingRequest = async (
  projectId: string | undefined,
  url: string | undefined
): Promise<GitHubProjectResponse | null> => {
  try {
    const encodedUrl = encodeURIComponent(url ?? "");

    const response = await axios.get<GitHubProjectResponse>(
      `https://rev-ops-code-review-site.onrender.com/Admin/gitHub/folder/${encodedUrl}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(
          "Failed to fetch project:",
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

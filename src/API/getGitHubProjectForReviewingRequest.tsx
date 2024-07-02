import { GitHubProjectResponse } from "../Types/GithubProjectRequestReturnType";

export const getGitHubProjectForReviewingRequest = async (
  projectId: string | undefined
): Promise<GitHubProjectResponse | null> => {
  try {
    const response: Response = await fetch(
      `http://localhost:5000/Admin/gitHub/review/${projectId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const result: GitHubProjectResponse = await response.json();

      return result;
    } else {
      console.error("Failed to fetch projects:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
    return null;
  }
};

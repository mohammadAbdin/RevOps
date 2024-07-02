import { GitHubProjectResponse } from "../Types/GithubProjectRequestReturnType";

export const getGitHubProjectInternalForReviewingRequest = async (
  projectId: string | undefined,
  url: string | undefined
): Promise<GitHubProjectResponse | null> => {
  try {
    let encodedUrl: string;
    if (url != undefined) encodedUrl = encodeURIComponent(url);
    else encodedUrl = encodeURIComponent("");

    const response: Response = await fetch(
      `http://localhost:5000/Admin/gitHub/folder/${encodedUrl}`,
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

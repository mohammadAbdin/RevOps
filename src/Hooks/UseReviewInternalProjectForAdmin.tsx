import { useState } from "react";
import { getGitHubProjectInternalForReviewingRequest } from "../API/getGitHubProjectInternalForReviewingRequest";
import { GitHubProjectResponse } from "../Types/GithubProjectRequestReturnType";
interface UseReviewProjectsForAdminReturn {
  getGitHubProjectInternalForReviewing: (
    projectId: string | undefined,
    url: string
  ) => Promise<3 | undefined>;
  gitHubProjectInternalForReviewing: GitHubProjectResponse | null;
}

const useReviewProjectsForAdmin = (): UseReviewProjectsForAdminReturn => {
  const [gitHubProjectInternalForReviewing, GitHubProjectInternalForReviewing] =
    useState<GitHubProjectResponse | null>(null);

  const getGitHubProjectInternalForReviewing = async (
    projectId?: string,
    url?: string
  ) => {
    try {
      const response: GitHubProjectResponse | null =
        await getGitHubProjectInternalForReviewingRequest(projectId, url);
      GitHubProjectInternalForReviewing(response);
      return;
    } catch (error) {
      console.error("Error fetching projects to do:", error);
      GitHubProjectInternalForReviewing(null);
    }
    return 3;
  };

  return {
    getGitHubProjectInternalForReviewing,
    gitHubProjectInternalForReviewing,
  };
};

export default useReviewProjectsForAdmin;

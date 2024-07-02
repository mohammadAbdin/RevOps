import { useState } from "react";
import { getGitHubProjectForReviewingRequest } from "../API/getGitHubProjectForReviewingRequest";
import { GitHubProjectResponse } from "../Types/GithubProjectRequestReturnType";
interface UseReviewProjectsForAdminReturn {
  getGitHubProjectForReviewing: (
    projectId: string | undefined
  ) => Promise<3 | undefined>;
  gitHubProjectForReviewing: GitHubProjectResponse | null;
}

const useReviewProjectsForAdmin = (): UseReviewProjectsForAdminReturn => {
  const [gitHubProjectForReviewing, setGitHubProjectForReviewing] =
    useState<GitHubProjectResponse | null>(null);

  const getGitHubProjectForReviewing = async (projectId?: string) => {
    try {
      const response: GitHubProjectResponse | null =
        await getGitHubProjectForReviewingRequest(projectId);
      setGitHubProjectForReviewing(response);
      return;
    } catch (error) {
      console.error("Error fetching projects to do:", error);
      setGitHubProjectForReviewing(null);
    }
    return 3;
  };

  return {
    getGitHubProjectForReviewing,
    gitHubProjectForReviewing,
  };
};

export default useReviewProjectsForAdmin;

import { useState } from "react";
import { getGitHubProjectInternalForReviewingRequest } from "../API/getGitHubProjectInternalForReviewingRequest";
import { GitHubProjectResponse } from "../Types/GithubProjectRequestReturnType";
interface UseReviewProjectsForAdminReturn {
  getGitHubProjectInternalForReviewing: (
    projectId: string | undefined,
    url: string
  ) => Promise<GitHubProjectResponse | undefined>;
  gitHubProjectInternalForReviewing: GitHubProjectResponse | null;
}

const useReviewProjectsForAdmin = (): UseReviewProjectsForAdminReturn => {
  const [
    gitHubProjectInternalForReviewing,
    setGitHubProjectInternalForReviewing,
  ] = useState<GitHubProjectResponse | null>(null);

  const getGitHubProjectInternalForReviewing = async (
    projectId?: string,
    url?: string
  ) => {
    try {
      const response: GitHubProjectResponse | null =
        await getGitHubProjectInternalForReviewingRequest(projectId, url);
      setGitHubProjectInternalForReviewing(response);
      return;
    } catch (error) {
      console.error("Error fetching projects to do:", error);
      setGitHubProjectInternalForReviewing(null);
    }
    return undefined;
  };

  return {
    getGitHubProjectInternalForReviewing,
    gitHubProjectInternalForReviewing,
  };
};

export default useReviewProjectsForAdmin;

import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import useReviewProjectsForAdmin from "../../Hooks/UseReviewProjectsForAdmin";
import useGetTokens from "../../Hooks/UseGetTokens";
import FoldersAndFilesStructure from "../../Components/foldersAndFilesStructure";
import { useParams } from "react-router-dom";

const ReviewProject: React.FC = () => {
  const { projectId } = useParams<{ projectId: string | undefined }>();

  const { setIsLogedIn, setUser } = useContext(UserContext);
  const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  const { getGitHubProjectForReviewing, gitHubProjectForReviewing } =
    useReviewProjectsForAdmin();
  useEffect(() => {
    if (!isLoading && !gitHubProjectForReviewing) {
      getGitHubProjectForReviewing(projectId);
    }
  }, [
    isLoading,
    getGitHubProjectForReviewing,
    gitHubProjectForReviewing,
    projectId,
  ]);

  if (isLoading || gitHubProjectForReviewing === null) {
    return (
      <div
        className="spinner inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-red-200 border-t-black"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  console.log(gitHubProjectForReviewing);

  return (
    <div className="flex-grow flex flex-col gap-4 mt-8 mr-4 lg:mt-16 mb-8">
      <h1>{gitHubProjectForReviewing.project.project_title}</h1>
      <FoldersAndFilesStructure
        projectId={projectId}
        project_title={gitHubProjectForReviewing.project.project_title}
        staticData={gitHubProjectForReviewing.foldersAndFiles}
        feedBack={gitHubProjectForReviewing.project.feedBack}
      />
    </div>
  );
};

export default ReviewProject;

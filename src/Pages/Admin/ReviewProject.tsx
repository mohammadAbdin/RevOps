import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
// import { FaFolder, FaFileAlt } from "react-icons/fa";
import useReviewProjectsForAdmin from "../../Hooks/UseReviewProjectsForAdmin";
import useGetTokens from "../../Hooks/UseGetTokens";
import FoldersAndFilesStructure from "../../Components/foldersAndFilesStructure";
import { useParams } from "react-router-dom";

const ReviewProject: React.FC = () => {
  const { projectId } = useParams<{ projectId: string | undefined }>();
  console.log("projectId", projectId);

  const { setIsLogedIn, setUser } = useContext(UserContext);
  const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  const { getGitHubProjectForReviewing, gitHubProjectForReviewing } =
    useReviewProjectsForAdmin();
  console.log(projectId);
  useEffect(() => {
    if (!isLoading && !gitHubProjectForReviewing) {
      console.log("github after fetch:");
      getGitHubProjectForReviewing(projectId);
      console.log("gitHubProjectForReviewing", gitHubProjectForReviewing);
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

  return (
    <div className="flex-grow flex flex-col gap-4 mt-8 mr-4 lg:mt-16 mb-8">
      <h1>{gitHubProjectForReviewing.project.project_title}</h1>
      <FoldersAndFilesStructure
        projectId={projectId}
        project_title={gitHubProjectForReviewing.project.project_title}
        staticData={gitHubProjectForReviewing.foldersAndFiles}
      />
    </div>
  );
};

export default ReviewProject;

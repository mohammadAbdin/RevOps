import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import UseReviewInternalProjectForAdmin from "../../Hooks/UseReviewInternalProjectForAdmin";
import useGetTokens from "../../Hooks/UseGetTokens";

import { useLocation, useParams } from "react-router-dom";
import FoldersAndFilesStructure from "../../Components/foldersAndFilesStructure";

const ReviewProjectInternalFolders: React.FC = () => {
  const { randomNum } = useParams();
  console.log(randomNum);
  const onBackButtonEvent = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    window.location.reload();
  };
  useEffect(() => {
    window.addEventListener("popstate", onBackButtonEvent);
    return () => {
      window.removeEventListener("popstate", onBackButtonEvent);
    };
  }, []);
  const location = useLocation();

  const { url, projectId, project_title, path, feedBack } =
    location.state || {};
  console.log(feedBack);

  const { setIsLogedIn, setUser } = useContext(UserContext);
  const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  const {
    getGitHubProjectInternalForReviewing,
    gitHubProjectInternalForReviewing,
  } = UseReviewInternalProjectForAdmin();
  useEffect(() => {
    if (!isLoading && !gitHubProjectInternalForReviewing) {
      getGitHubProjectInternalForReviewing(projectId, url);
    }
  }, [
    isLoading,
    getGitHubProjectInternalForReviewing,
    gitHubProjectInternalForReviewing,
    projectId,
    url,
  ]);

  if (isLoading || gitHubProjectInternalForReviewing === null) {
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
      <h1>{project_title}</h1>
      <h3>{path}</h3>
      <FoldersAndFilesStructure
        feedBack={feedBack}
        projectId={projectId}
        project_title={project_title}
        staticData={gitHubProjectInternalForReviewing.foldersAndFiles}
      />
    </div>
  );
};

export default ReviewProjectInternalFolders;

import { useContext, useEffect } from "react";
import { UserContext } from "../../../Context/UserContext";
import useGetFileContent from "../../../Hooks/UseGetFileContent";
import useGetTokens from "../../../Hooks/UseGetTokens";
import Divider from "../../../Components/Divider";
import { useParams } from "react-router-dom";

const ProjectsToDo: React.FC = () => {
  const { encodedUrl } = useParams();
  let url: string = "";
  if (encodedUrl) {
    url = decodeURIComponent(encodedUrl);
    console.log(url);
  }
  const { setIsLogedIn, setUser } = useContext(UserContext);

  const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  const { getFileContent, fileContent } = useGetFileContent();

  useEffect(() => {
    if (!isLoading && !fileContent) {
      getFileContent(url);
    }
  }, [isLoading, getFileContent, fileContent, url]);

  if (isLoading || fileContent === null) {
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
    <div className="flex-grow flex flex-col gap-0 home">
      <Divider text="My Projects" />
      <div className="mb-8 lg:mb-16"></div>
      {/* {projectsToDo.map((project, index) => (
        <UserProject key={index} {...project} isAdmin={isAdmin} />
      ))} */}
    </div>
  );
};

export default ProjectsToDo;

import { useContext, useEffect } from "react";
import { UserContext } from "../../../Context/UserContext";
import UserProject from "../../MyProjects/UserProject";
import useGetProjectsToDo from "../../../Hooks/UseGetProjectsToDo";
import useGetTokens from "../../../Hooks/UseGetTokens";
import Divider from "../../../Components/Divider";

const ProjectsToDo: React.FC = () => {
  const { setIsLogedIn, setUser } = useContext(UserContext);
  const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  const { getProjectsToDo, projectsToDo } = useGetProjectsToDo();
  console.log(projectsToDo);

  useEffect(() => {
    if (!isLoading && !projectsToDo) {
      console.log("User after fetch:");
      getProjectsToDo();
    }
  }, [isLoading, getProjectsToDo, projectsToDo]);

  if (isLoading || projectsToDo === null) {
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
      <div className="mb-16"></div>
      {projectsToDo.map((project, index) => (
        <UserProject key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsToDo;

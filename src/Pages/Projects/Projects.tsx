import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import UserProject from "../MyProjects/UserProject";
import useGetAllProjects from "../../Hooks/UseGetAllProjects";
import useGetTokens from "../../Hooks/UseGetTokens";
import Divider from "../../Components/Divider";

const Projects: React.FC = () => {
  const { setIsLogedIn, setUser, isAdmin } = useContext(UserContext);
  const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  const { getAllProjects, allProjects } = useGetAllProjects();
  console.log(allProjects);

  useEffect(() => {
    if (!isLoading && !allProjects) {
      console.log("User after fetch:");
      getAllProjects();
    }
  }, [isLoading, getAllProjects, allProjects]);

  if (isLoading || allProjects === null) {
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
      {allProjects.map((project, index) => (
        <UserProject key={index} {...project} isAdmin={isAdmin} />
      ))}
    </div>
  );
};

export default Projects;

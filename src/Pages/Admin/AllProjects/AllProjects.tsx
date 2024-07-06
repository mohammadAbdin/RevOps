import { useContext, useEffect } from "react";
import { UserContext } from "../../../Context/UserContext";
import UserProject from "../../MyProjects/UserProject";
import useGetAllProjects from "../../../Hooks/UseGetAllProjects";
import useGetTokens from "../../../Hooks/UseGetTokens";
import Divider from "../../../Components/Divider";

const AllProjects: React.FC = () => {
  const { setIsLogedIn, setUser, isAdmin, determineSearchData } =
    useContext(UserContext);
  const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  const { getAllProjects, allProjects } =
    useGetAllProjects(determineSearchData);

  useEffect(() => {
    if (!isLoading && !allProjects) {
      getAllProjects();
    }
  }, [isLoading, getAllProjects, allProjects]);

  if (isLoading || allProjects === null) {
    return (
      <div
        className="spinner mt-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-red-200 border-t-black"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex-grow flex flex-col gap-0 home">
      <Divider text="" />
      <div className="mb-8 lg:mb-16"></div>

      {allProjects.map((project, index) => (
        <UserProject key={index} {...project} isAdmin={isAdmin} />
      ))}
    </div>
  );
};

export default AllProjects;

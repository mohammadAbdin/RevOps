import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import UserProject from "./UserProject";
import useGetUserProjects from "../../Hooks/UseGetMyProjects";
import useGetTokens from "../../Hooks/UseGetTokens";
import Divider from "../../Components/Divider";

const MyProjects: React.FC = () => {
  const { setIsLogedIn, setUser, user, isAdmin, determineSearchData } =
    useContext(UserContext);
  const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  const { getUserProjects, userProjects } =
    useGetUserProjects(determineSearchData);

  useEffect(() => {
    if (!isLoading && user && !userProjects) {
      getUserProjects(user);
    }
  }, [isLoading, user, getUserProjects, userProjects]);

  if (isLoading || userProjects === null) {
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
      <Divider text="My Projects" />
      <div className="mb-8 lg:mb-16"></div>
      {userProjects.map((project, index) => (
        <UserProject key={index} {...project} isAdmin={isAdmin} />
      ))}
    </div>
  );
};

export default MyProjects;

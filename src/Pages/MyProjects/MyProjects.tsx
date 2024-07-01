import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import UserProject from "./UserProject";
import useGetUserProjects from "../../Hooks/UseGetMyProjects";
import useGetTokens from "../../Hooks/UseGetTokens";
import Divider from "../../Components/Divider";

const MyProjects: React.FC = () => {
  const { setIsLogedIn, setUser, user } = useContext(UserContext);
  const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  const { getUserProjects, userProjects } = useGetUserProjects();
  console.log(userProjects);

  useEffect(() => {
    if (!isLoading && user && !userProjects) {
      console.log("User after fetch:", user);
      getUserProjects(user);
    }
  }, [isLoading, user, getUserProjects, userProjects]);

  if (isLoading || userProjects === null) {
    return (
      <div
        className="spinner inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-red-200 border-t-black"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  // const exampleData = {
  //   title:
  //     "Backend-snippet of a full-stack web application for creating, viewing, and registering for events",
  //   link: "/questions/292788/backend-snippet-of-a-full-stack-web-application-for-creating-viewing-and-regis",
  //   votes: 3,
  //   answers: 1,
  //   views: 47,
  //   tags: ["python", "csv", "classes"],
  //   user: {
  //     name: "JupperTV",
  //     link: "/users/284090/juppertv",
  //     avatar: "https://i.sstatic.net/1UPFZ.png?s=32",
  //     reputation: 33,
  //   },
  //   lastActivity: "2024-07-01T08:33:48Z", // ISO 8601 format
  // };
  return (
    <div className="flex-grow flex flex-col gap-0 home">
      {user ? user.name + "my projects" : "Projects"}
      <Divider text="My Projects" />
      <div className="mb-16"></div>
      {userProjects.map((project, index) => (
        <UserProject key={index} {...project} />
      ))}
    </div>
  );
};

export default MyProjects;

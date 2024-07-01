import { useState } from "react";
import { getUserProjectsRequest } from "../API/getUserProjectsRequest";
import UserType from "../Types/UserType";
import ProjectType from "../Types/ProjectType";

interface UseGetUserProjectsReturn {
  getUserProjects: (user: UserType) => void;
  userProjects: ProjectType[] | null;
}

const useGetUserProjects = (): UseGetUserProjectsReturn => {
  const [userProjects, setUserProjects] = useState<ProjectType[] | null>(null);

  const getUserProjects = async (user: UserType) => {
    try {
      const response: ProjectType[] | null = await getUserProjectsRequest(user);
      setUserProjects(response);
    } catch (error) {
      console.error("Error fetching user projects:", error);
      setUserProjects(null);
    }
  };

  return {
    getUserProjects,
    userProjects,
  };
};

export default useGetUserProjects;

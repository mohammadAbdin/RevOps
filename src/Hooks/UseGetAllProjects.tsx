import { useState } from "react";
import { getAllProjectsRequest } from "../API/getAllProjectsRequest";
import ProjectType from "../Types/ProjectType";

interface UseGetAllProjectsReturn {
  getAllProjects: () => void;
  allProjects: ProjectType[] | null;
}

const useGetAllProjects = (): UseGetAllProjectsReturn => {
  const [allProjects, setAllProjects] = useState<ProjectType[] | null>(null);

  const getAllProjects = async () => {
    try {
      const response: ProjectType[] | null = await getAllProjectsRequest();
      setAllProjects(response);
    } catch (error) {
      console.error("Error fetching all projects:", error);
      setAllProjects(null);
    }
  };

  return {
    getAllProjects,
    allProjects,
  };
};

export default useGetAllProjects;

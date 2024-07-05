import { useState } from "react";
import { getAllProjectsRequest } from "../API/getAllProjectsRequest";
import ProjectType from "../Types/ProjectType";
import { determineSearchDataPropsType } from "./../Types/determineSearchDataPropsType";

interface UseGetAllProjectsReturn {
  getAllProjects: () => void;
  allProjects: ProjectType[] | null;
}

const useGetAllProjects = (
  determineSearchData: (data: determineSearchDataPropsType) => void
): UseGetAllProjectsReturn => {
  const [allProjects, setAllProjects] = useState<ProjectType[] | null>(null);

  const getAllProjects = async () => {
    try {
      const response: ProjectType[] | null = await getAllProjectsRequest();
      setAllProjects(response);
      // console.log(response);
      determineSearchData({ data: response });
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

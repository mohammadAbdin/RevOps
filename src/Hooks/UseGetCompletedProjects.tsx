import { useState } from "react";
import { getCompletedProjectsRequest } from "../API/getCompletedProjectsRequest";
import ProjectType from "../Types/ProjectType";
import { determineSearchDataPropsType } from "./../Types/determineSearchDataPropsType";

interface UseGetCompletedProjectsReturn {
  getCompletedProjects: () => void;
  completedProjects: ProjectType[] | null;
}

const useGetCompletedProjects = (
  determineSearchData: (data: determineSearchDataPropsType) => void
): UseGetCompletedProjectsReturn => {
  const [completedProjects, setCompletedProjects] = useState<
    ProjectType[] | null
  >(null);

  const getCompletedProjects = async () => {
    try {
      const response: ProjectType[] | null =
        await getCompletedProjectsRequest();
      setCompletedProjects(response);
      determineSearchData({ data: response });
    } catch (error) {
      console.error("Error fetching completed projects:", error);
      setCompletedProjects(null);
    }
  };

  return {
    getCompletedProjects,
    completedProjects,
  };
};

export default useGetCompletedProjects;

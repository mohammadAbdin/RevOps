import { useState } from "react";
import { getProjectsToDoRequest } from "../API/getProjectsToDoRequest";
import ProjectType from "../Types/ProjectType";

interface UseGetProjectsToDoReturn {
  getProjectsToDo: () => void;
  projectsToDo: ProjectType[] | null;
}

const useGetProjectsToDo = (): UseGetProjectsToDoReturn => {
  const [projectsToDo, setProjectsToDo] = useState<ProjectType[] | null>(null);

  const getProjectsToDo = async () => {
    try {
      const response: ProjectType[] | null = await getProjectsToDoRequest();
      setProjectsToDo(response);
    } catch (error) {
      console.error("Error fetching projects to do:", error);
      setProjectsToDo(null);
    }
  };

  return {
    getProjectsToDo,
    projectsToDo,
  };
};

export default useGetProjectsToDo;

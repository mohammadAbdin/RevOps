import { useState } from "react";
import { getProjectsByTagRequest } from "../API/getProjectsByTagRequest";
import ProjectType from "../Types/ProjectType";
import { determineSearchDataPropsType } from "./../Types/determineSearchDataPropsType";

interface UseGetProjectsByTagReturn {
  getProjectsByTag: (tag: string | undefined) => void;
  projectsByTag: ProjectType[] | null;
}

const useGetProjectsByTag = (
  determineSearchData: (data: determineSearchDataPropsType) => void
): UseGetProjectsByTagReturn => {
  const [projectsByTag, setProjectsByTag] = useState<ProjectType[] | null>(
    null
  );

  const getProjectsByTag = async (tag: string | undefined) => {
    try {
      const response: ProjectType[] | null = await getProjectsByTagRequest(tag);
      setProjectsByTag(response);
      determineSearchData({ data: response });
    } catch (error) {
      console.error("Error fetching completed projects:", error);
      setProjectsByTag(null);
    }
  };

  return {
    getProjectsByTag,
    projectsByTag,
  };
};

export default useGetProjectsByTag;

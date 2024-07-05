import { useState } from "react";
import ProjectType from "../Types/ProjectType";
import { addProjectRequest } from "../API/addProjectRequest";
import UserType from "../Types/UserType";

const useProjects = (user: UserType | undefined) => {
  const [projectData, setProjectData] = useState<ProjectType>({
    project_title: "",
    githubUri: "",
    description: "",
    tags: [],
    tagsName: "",
    projectStatus: "pending",
    _id: "" || user?._id || undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProjectData({ ...projectData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (projectData.tagsName !== undefined) {
      const formattedTags = projectData.tagsName
        .split(",")
        .map((tag) => tag.trim());

      const updatedProjectData = {
        ...projectData,
        tags: formattedTags,
      };
      console.log(updatedProjectData);
      const response: Promise<unknown> = await addProjectRequest(
        updatedProjectData
      );
      console.log(response);
    }
  };

  return {
    projectData,
    setProjectData,
    handleChange,
    handleSubmit,
  };
};

export default useProjects;

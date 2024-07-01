import { useState } from "react";
import ProjectType from "../Types/ProjectType";
import { addProject } from "../API/addProjectRequest";
import UserType from "../Types/UserType";

const useProjects = (user: UserType | undefined) => {
  const [projectData, setProjectData] = useState<ProjectType>({
    project_title: "",
    githubUri: "",
    description: "",
    tags: [],
    projectStatus: "pending",
    _id: "" || user?._id || undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Project Data:", projectData);
    const response: Promise<unknown> = await addProject(projectData);
    console.log("hi");
    console.log(response);
  };

  return {
    projectData,
    setProjectData,
    handleChange,
    handleSubmit,
  };
};

export default useProjects;

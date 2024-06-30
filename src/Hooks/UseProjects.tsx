import { useState } from "react";
import ProjectType from "../Types/ProjectType";
import { addProject } from "../API/addProjectRequest";

const useProjects = () => {
  const [projectData, setProjectData] = useState<ProjectType>({
    project_title: "",
    githubUri: "",
    description: "",
    tags: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Project Data:", projectData);
    const response: Promise<any> = await addProject(projectData);
    console.log("hi");
    console.log(response);
  };

  return {
    projectData,
    handleChange,
    handleSubmit,
  };
};

export default useProjects;

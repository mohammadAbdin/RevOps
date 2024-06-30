import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGithub, faTags } from "@fortawesome/free-solid-svg-icons"; 

interface ProjectData {
  title: string;
  githubUri: string;
  tags: string;
}

const AddProject: React.FC = () => {
  const [projectData, setProjectData] = useState<ProjectData>({
    title: "",
    githubUri: "",
    tags: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Project Data:", projectData);
    // Handle save logic here (e.g., API call)
    // navigate('/desired-path'); // Navigate after saving
  };

  return (
    <div className="w-full home">
      <div className="p-8 rounded border border-gray-200">
        <h1 className="font-medium text-3xl">Add Project</h1>
        <p className="text-gray-600 mt-6">
          Provide details about your new project below.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mt-8 space-y-6">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faUser} className="text-gray-500" />
              <div className="flex-1">
                <label
                  htmlFor="title"
                  className="text-sm text-gray-700 block mb-1 font-medium"
                >
                  Project Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={projectData.title}
                  onChange={handleChange}
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="Enter project title"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faGithub} className="text-gray-500" />
              <div className="flex-1">
                <label
                  htmlFor="githubUri"
                  className="text-sm text-gray-700 block mb-1 font-medium"
                >
                  GitHub URI
                </label>
                <input
                  type="url"
                  name="githubUri"
                  id="githubUri"
                  value={projectData.githubUri}
                  onChange={handleChange}
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="https://github.com/your-repo"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faTags} className="text-gray-500" />
              <div className="flex-1">
                <label
                  htmlFor="tags"
                  className="text-sm text-gray-700 block mb-1 font-medium"
                >
                  Tags
                </label>
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  value={projectData.tags}
                  onChange={handleChange}
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="Tags (comma-separated)"
                />
              </div>
            </div>
          </div>
          <div className="space-x-4 mt-8">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              Save
            </button>
            <button
              type="button"
              className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
              onClick={() => navigate("/")} // Example cancel action
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;

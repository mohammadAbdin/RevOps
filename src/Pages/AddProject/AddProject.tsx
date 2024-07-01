import React, { useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import useProjects from "../../Hooks/UseProjects";
import { FaFileAlt, FaTags, FaAlignLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import useGetTokens from "../../Hooks/UseGetTokens";

const AddProject: React.FC = () => {
  const { setIsLogedIn, setUser, user } = useContext(UserContext);
  const { projectData, setProjectData, handleChange, handleSubmit } =
    useProjects(user);
  const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  console.log(user);
  useEffect(() => {
    if (!isLoading) {
      // This will only run once the fetchData is complete
      console.log("User after fetch:", user);
      setProjectData((prev) => {
        return {
          ...prev,
          _id: user?._id ?? prev._id,
        };
      });
    }
  }, [isLoading, user, setProjectData]);

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading state while waiting
  }
  // useEffect(() => {
  //   setProjectData((prev) => {
  //     return {
  //       ...prev,
  //       _id: user?._id ?? prev._id,
  //     };
  //   });
  // }, [user, setProjectData]);

  return (
    <div className="w-full home">
      <div className="p-8 rounded border border-gray-200 ">
        <h1 className="font-medium text-3xl">
          {user ? user.name : "Add Project"}
        </h1>
        <p className="text-gray-600 mt-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          dolorem vel cupiditate laudantium dicta.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="text-sm text-left text-gray-700 block mb-1 font-medium"
              >
                Project Title
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  name="project_title"
                  id="project_title"
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="Project Title"
                  value={projectData.project_title}
                  onChange={handleChange}
                />
                <FaFileAlt className="text-gray-700 text-xl" />
              </div>
            </div>
            <div>
              <label
                htmlFor="githubUri"
                className="text-sm text-left text-gray-700 block mb-1 font-medium"
              >
                GitHub URL
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  name="githubUri"
                  id="githubUri"
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="Your GitHub URL"
                  value={projectData.githubUri}
                  onChange={handleChange}
                />
                <FaGithub className="text-gray-700 text-xl" />
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="text-sm text-left text-gray-700 block mb-1 font-medium"
              >
                Description
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="Enter description or your problem"
                  value={projectData.description}
                  onChange={handleChange}
                />
                <FaAlignLeft className="text-gray-700 text-xl" />
              </div>
            </div>
            <div>
              <label
                htmlFor="tags"
                className="text-sm text-left text-gray-700 block mb-1 font-medium"
              >
                Tags
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                  placeholder="(ex. Js,Html,Css, . . .)"
                  value={projectData.tags}
                  onChange={handleChange}
                />
                <FaTags className="text-gray-700 text-xl" />
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;

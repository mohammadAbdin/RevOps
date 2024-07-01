import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import ProjectType from "../../Types/ProjectType";

const UserProject: React.FC<ProjectType> = ({
  project_title,
  description,
  tags,
}) => {
  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substr(0, maxLength) + " ...";
    }
    return text;
  };

  return (
    <div className="flex-col lg:flex-row flex p-4 border-b border-t-gray-200 rounded-t-md rounded-b-md mr-4 mb-4">
      <div className="flex items-center lg:justify-center justify-between mb-2">
        <div className="flex items-center justify-center flex-row lg:flex-col gap-4 lg:gap-0">
          <div className="flex items-center justify-between lg:p-2 flex-row lg:flex-col">
            <div className="text-xl font-bold flex items-center justify-between">
              <FaCheck className="text-green-600" aria-hidden="true" />
            </div>
            <div className="text-sm text-gray-600">answers</div>
          </div>
          <div className="flex flex-row lg:flex-col items-center justify-around">
            <div className="text-xl font-bold">47</div>
            <div className="text-sm text-gray-600">views</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full">
        <div className="mb-2">
          <h3 className="text-lg text-left mx-4 font-semibold text-blue-600 hover:text-blue-800">
            {project_title}
          </h3>
          <p className="mx-4 text-gray-700">
            {truncateDescription(description, 150)}
          </p>
          {/* Replace 150 with desired max length */}
          {/* Add a 'read more' link or button if needed */}
        </div>
        <div className="flex flex-row justify-between items-baseline mx-4">
          <div className="flex items-center space-x-2 mb-2">
            {tags.map((tag, index) => (
              <Link
                to={`/tags/${tag}`}
                key={index}
                className="bg-gray-200 text-gray-800 text-sm font-medium px-2 py-1 rounded hover:bg-gray-300"
              >
                {tag}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <p className="ml-auto text-sm text-gray-500">
              roshdi answered 20 days ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProject;

// commitIndex
// :
// 5
// date
// :
// "2024-07-02T07:59:11.629Z"
// description
// :
// "hussein is not a good person"
// githubUri
// :
// "https://github.com/mohammadAbdin/RevOps"
// projectStatus
// :
// "pending"
// project_title
// :
// "RevOps"
// tags
// :
// ['html ,js']
// userId
// :
// "668023014356eab2ca06edc9"
// __v
// :
// 0
// _id
// :
// "6682830452313f126277a70c"
interface UserProjectProps {
  _id?: string;
  commitIndex?: number;
  date?: Date;
  githubUri: string;
  projectStatus: string;
  userId?: string;
  project_title: string;
  description: string;
  tags: string[];
  isAdmin: boolean;
}
import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { updateTheProjectStatusRequest } from "../../API/updateTheProjectStatusRequest";
import { publishTheProjectRequest } from "../../API/publishTheProjectRequest";
const UserProject: React.FC<UserProjectProps> = ({
  _id,
  commitIndex,
  date,
  githubUri,
  projectStatus,
  userId,
  project_title,
  description,
  tags,
  isAdmin,
}) => {
  console.log(commitIndex, date, githubUri, projectStatus, userId);

  const naviagte = useNavigate();
  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substr(0, maxLength) + " ...";
    }
    return text;
  };

  return (
    <div
      className="flex-col lg:flex-row flex p-4 border-b border-t-gray-200 rounded-t-md rounded-b-md mr-4 mb-4 hover:bg-gray-300 cursor-pointer"
      onClick={(e) => {
        if ((e.target as HTMLInputElement).id !== "not")
          naviagte(`/Projects-to-do/ReviewProject/${_id}`);
      }}
    >
      <div className="flex items-center lg:justify-center justify-between mb-2">
        {!isAdmin && (
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
        )}
      </div>
      <div className="flex flex-col justify-between w-full">
        <div className="mb-2">
          <h3 className="text-lg text-left mx-4 font-semibold text-blue-600 hover:text-blue-800">
            {project_title}
          </h3>
          <p className="mx-4 text-gray-700">
            {truncateDescription(description, 150)}
          </p>
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
            {isAdmin ? (
              <div className="flex flex-col lg:flex-col justify-around gap-2 ">
                <button
                  className="rounded-md bg-teal-600 px-5 py-2.5   text-sm font-medium text-white shadow"
                  onClick={() => {
                    //make the project Review in progress
                    updateTheProjectStatusRequest(_id);
                    naviagte(`/Projects-to-do/ReviewProject/${_id}`);
                  }}
                >
                  Review the Code
                </button>
                <button
                  id="not"
                  className=" rounded-md bg-teal-600 px-5 py-2.5   text-sm font-medium text-white shadow"
                  onClick={(e) => {
                    e.preventDefault();
                    //make the project Review in progress
                    publishTheProjectRequest(_id);
                    // window.location.reload();
                    naviagte(`/`);
                  }}
                >
                  Publish Project
                </button>
              </div>
            ) : (
              <div>
                <p className="ml-auto text-sm text-gray-500">{projectStatus}</p>
                <p className="ml-auto text-sm text-gray-500">
                  roshdi answered 20 days ago
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProject;

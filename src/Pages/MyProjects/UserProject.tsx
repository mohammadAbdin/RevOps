import { UserProjectProps } from "../../Types/UserProjectProps";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
import { updateTheProjectViewsRequest } from "../../API/incrementProjectViewsRequest";
import { updateTheProjectStatusRequest } from "../../API/updateTheProjectStatusRequest";
import { publishTheProjectRequest } from "../../API/publishTheProjectRequest";
import deleteProject from "../../API/deleteProjectRequest";
import { showToastSuccessMessage } from "../../Components/Toast/Toasts";
const UserProject: React.FC<UserProjectProps> = ({
  _id,
  projectStatus,
  project_title,
  description,
  tags,
  isAdmin,
  views,
}) => {
  const navigate = useNavigate();
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
        if (!isAdmin && (e.target as HTMLInputElement).id !== "not")
          updateTheProjectViewsRequest(_id);
        if ((e.target as HTMLInputElement).id !== "not")
          navigate(`/Projects-to-do/ReviewProject/${_id}`);
      }}
    >
      {isAdmin ? (
        <FaTimes
          id="not"
          className=" top-2 right-2 size-6 text-red-600  hover:text-black cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            if (
              window.confirm("Are you sure you want to delete the project?")
            ) {
              if (_id !== undefined) deleteProject(_id);
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            }
          }}
        />
      ) : null}
      <div className="flex items-center lg:justify-center justify-between mb-2">
        {!isAdmin && (
          <div className="flex items-center justify-center flex-row lg:flex-col gap-4 lg:gap-0">
            <div className="flex items-center justify-between lg:p-2 flex-row lg:flex-col">
              <div className="text-xl font-bold flex items-center justify-between">
                {projectStatus == "Completed" ? (
                  <FaCheck className="text-green-600" aria-hidden="true" />
                ) : (
                  <FaTimes className="text-red-600" aria-hidden="true" />
                )}
              </div>
              <div className="text-sm text-gray-600">answers</div>
            </div>
            <div className="flex flex-row lg:flex-col items-center justify-around">
              <div className="text-xl font-bold">{views}</div>
              <div className="text-sm text-gray-600 ml-1">views</div>
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
          <div className="flex items-center flex-wrap space-x-2 mb-2">
            {tags.map((tag, index) => (
              <Link
                id="not"
                to={`/Projects/${tag}`}
                onClick={() => {
                  navigate(`/Projects/${tag}`);
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000);
                }}
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
                  className="rounded-md bg-teal-600 hover:bg-teal-800 px-5 py-2.5   text-sm font-medium text-white shadow"
                  onClick={() => {
                    updateTheProjectStatusRequest(_id);
                    navigate(`/Projects-to-do/ReviewProject/${_id}`);
                  }}
                >
                  {projectStatus == "Review in progress"
                    ? "Continue Reviewing"
                    : "Review the Code"}
                </button>
                <button
                  id="not"
                  className=" rounded-md bg-teal-600 px-5 py-2.5 hover:bg-teal-800   text-sm font-medium text-white shadow"
                  onClick={(e) => {
                    e.preventDefault();
                    showToastSuccessMessage("you published the project");
                    publishTheProjectRequest(_id);
                    navigate(`/`);
                  }}
                >
                  {projectStatus != "Completed"
                    ? "Publish Project"
                    : "Edit and republish"}
                </button>
              </div>
            ) : (
              <div>
                <p className="ml-auto text-sm text-gray-500">{projectStatus}</p>
                <p className="ml-auto text-sm text-gray-500">Admins answered</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProject;

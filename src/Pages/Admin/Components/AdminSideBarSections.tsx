import React from "react";
// import { UserContext } from "../../../Context/UserContext";
// import { useNavigate } from "react-router-dom";

const AdminSideBarSections: React.FC = () => {
  //   const navigate = useNavigate();
  //   const { isLogedIn } = useContext(UserContext);

  return (
    <ul className="mt-6 space-y-1">
      <li>
        <a
          href="/"
          className="block text-left rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/Projects" // projects to do
          className="block text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Projects to Do
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Admin requests
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Our Admins
        </a>
      </li>
      <li>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-start justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <span className="text-sm font-medium"> Account </span>

            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul className="mt-2 space-y-1 px-4">
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Details
              </a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default AdminSideBarSections;

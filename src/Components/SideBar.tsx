import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Sidebar: React.FC = () => {
  const { user } = useContext(UserContext);
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <>
      (
      <div className=" lg:flex flex-col h-screen justify-between  hidden mr-32  xl:mr-0 border-e bg-white lg:w-40 w-20 items-start   relative left-0  top-32">
        <div className=" sticky px-1 py-6 w-32">
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
                href="/Projects"
                className="block text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Projects
              </a>
            </li>
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-start justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium">Uploaded Projects</span>

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
                      href="/Add-Project"
                      className="w-full whitespace-nowrap block text-left rounded-lg px-4 py-2 text-xs md:text-sm lg:text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Add a Project
                    </a>
                  </li>

                  <li>
                    <a
                      href="/My-Projects"
                      className="w-full whitespace-nowrap block text-left rounded-lg px-4 py-2 text-xs md:text-sm lg:text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      My Projects
                    </a>
                  </li>
                </ul>
              </details>
            </li>{" "}
            <li>
              <a
                href="#"
                className="block text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Be an Admin
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
        </div>

        <div className="sticky inset-x-0 bottom-0 mr-12 border-t  border-gray-100">
          <a
            href="#"
            className="flex mr-12 items-start gap-2 bg-white pb-4 hover:bg-gray-50"
          >
            <img
              alt="User avatar"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="size-10 rounded-full  object-cover"
            />

            <div>
              <p className="text-xs ">
                <strong className="block  font-medium">
                  {user ? user.name : "user not found"}
                </strong>
                <span>{user ? user.email : ""}</span>
              </p>
            </div>
          </a>
        </div>
      </div>
      ){/* } */}
      <main className="mt-16 flex-grow home">
        <Outlet /> {/* This will render the matched child route component */}
      </main>
    </>
  );
};

export default Sidebar;

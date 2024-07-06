import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import useLogin from "../Hooks/UseLogIn";
import { showToastInfoMessage } from "./Toast/Toasts";

const HamburgerMenu: React.FC = () => {
  const { handleLogout } = useLogin();
  const { isLogedIn, user } = useContext(UserContext);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <section className="MOBILE-MENU flex lg:hidden">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <div className="block meduimL:hidden fixed right-4 top-2">
            <button
              onClick={() => setIsNavOpen(false)}
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-800"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className="border-b border-gray-400 my-8 uppercase">
              <button
                onClick={() => {
                  navigate("/");
                  setIsNavOpen((prev) => !prev);
                }}
                className="text-gray-800"
              >
                Home
              </button>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <button
                onClick={() => {
                  if (user) {
                    if (user.isAdmin) {
                      navigate("/Projects");
                    }
                  }
                  setIsNavOpen((prev) => !prev);
                  navigate("/CompletedProjects");
                }}
                className="text-gray-800"
              >
                Projects
              </button>
            </li>

            {user?.isAdmin ? (
              <li className="border-b border-gray-400 my-8 uppercase">
                <button
                  onClick={() => {
                    setIsNavOpen((prev) => !prev);
                    navigate("/Projects-to-do");
                  }}
                  className="text-gray-800"
                >
                  {" "}
                  Projects to Do
                </button>
              </li>
            ) : (
              <li className=" uppercase">
                <button
                  onClick={() => {
                    if (isLogedIn) {
                      setIsNavOpen((prev) => !prev);
                      navigate("/Add-Project");
                    } else {
                      showToastInfoMessage(
                        "You have to log in to add a project"
                      );
                    }
                  }}
                  className=" border-b border-gray-400 my-8 text-gray-800"
                >
                  Add a project
                </button>
                <button
                  onClick={() => {
                    if (isLogedIn) {
                      setIsNavOpen((prev) => !prev);
                      navigate("/My-Projects");
                    } else {
                      showToastInfoMessage(
                        "You need to be logged in to see your projects"
                      );
                    }
                  }}
                  className="border-b border-gray-400 my-8 text-gray-800 ml-10"
                >
                  My Projects
                </button>
              </li>
            )}
            {user ? (
              <li className="border-b border-gray-400 my-8 uppercase">
                <button onClick={handleLogout} className="text-gray-800">
                  Log Out
                </button>
              </li>
            ) : (
              <li className=" uppercase">
                <button
                  onClick={() => {
                    setIsNavOpen((prev) => !prev);
                    navigate("/LogIn");
                  }}
                  className=" border-b border-gray-400 my-8 text-gray-800"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    setIsNavOpen((prev) => !prev);
                    navigate("/Register");
                  }}
                  className="border-b border-gray-400 my-8 text-gray-800 ml-10"
                >
                  Sign Up
                </button>
              </li>
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HamburgerMenu;

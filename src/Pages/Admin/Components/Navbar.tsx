import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { UserContext } from "../../../Context/UserContext";
import useGetTokens from "../../../Hooks/UseGetTokens";
import useLogin from "../../../Hooks/UseLogIn";
import AdminTitles from "../AdminHome/AdminTitles";
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { setIsLogedIn, setUser, user } = useContext(UserContext);
  const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  const { handleLogout } = useLogin();
  useEffect(() => {
    if (!isLoading) {
      console.log(isLoading);
    }
  }, [isLoading, user]);

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <header className="bg-black">
        <div className="myNavbar verticle-menu-container bg-gray-800 fixed w-screen sm:mr-32 lg:justify-between text-white px-4 sm:px-6 top-0 lg:px-8 ">
          <div className=" flex h-16 items-center justify-between mr-32">
            <img className="mr-2 h-6 md:h-12 w-auto" src={logo} alt="logo" />

            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="sr-only text-white ">Home</span>
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className=" lg:block text-white">
                <AdminTitles />
              </nav>
              <div className="flex items-center gap-4">
                {user ? (
                  <div className="sm:flex sm:gap-4">
                    <div className="hidden sm:flex">
                      <button
                        className="rounded-md bg-gray-100 px-5 py-2.5 hidden lg:block text-sm font-medium text-teal-600"
                        onClick={handleLogout}
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="sm:flex sm:gap-4">
                    <button
                      className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                      onClick={() => {
                        navigate("/LogIn");
                      }}
                    >
                      Login
                    </button>
                  </div>
                )}

                <div className="block meduimL:hidden fixed right-4 top-2">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

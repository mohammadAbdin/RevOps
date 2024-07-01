import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import UserSideBarSections from "./UserSideBarSections";
import useGetTokens from "../Hooks/UseGetTokens";

import AdminSideBarSections from "../Pages/Admin/Components/AdminSideBarSections";

const Sidebar: React.FC = () => {
  const { user, isAdmin, setIsLogedIn, setUser } = useContext(UserContext);
  console.log(isAdmin);
  const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  useEffect(() => {
    if (!isLoading) {
      console.log("User after fetch:", user);
    }
  }, [isLoading, user]);

  if (isLoading) {
    return <></>;
  }
  return (
    <>
      <div className=" lg:flex flex-col h-screen justify-between  hidden mr-32  xl:mr-0 border-e bg-white lg:w-40 w-20 items-start   relative left-0  top-32">
        <div className=" sticky px-1 py-6 w-32">
          {isAdmin ? <AdminSideBarSections /> : <UserSideBarSections />}
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
      <main className="mt-16 flex-grow home">
        <Outlet />
      </main>
    </>
  );
};

export default Sidebar;

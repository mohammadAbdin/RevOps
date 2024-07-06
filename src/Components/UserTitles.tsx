import React, { useState, useRef, useEffect } from "react";
import { FaBell } from "react-icons/fa";

import SearchInput from "./SearchInput";
import UserType from "../Types/UserType"; // Adjust the import path as needed

interface Props {
  user: UserType | undefined;
}

const UserTitles: React.FC<Props> = ({ user }) => {
  const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);
  const notificationsRef = useRef<HTMLUListElement>(null); // Correct type for ul element

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node)
      ) {
        setIsNotificationsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleNotifications = () => {
    setIsNotificationsVisible(!isNotificationsVisible);
  };

  return (
    <ul className="flex md:flex items-center gap-6 mr-10 text-sm relative">
      <SearchInput />
      <li className="relative">
        <a
          className="transition fixed right-16 top-5 md:top-0 md:right-0 cursor-pointer text-lg  md:relative group"
          onClick={toggleNotifications}
        >
          <FaBell />
          {user?.notification && user.notification.length > 0 && (
            <span className="absolute -top-2 -right-1 px-1 py-0.5 bg-red-500 text-white text-xs rounded-full">
              {user.notification.length}
            </span>
          )}
        </a>
        {isNotificationsVisible && (
          <ul
            className="fixed right-16 top-10 md:absolute md:right-0 md:top-full mt-2 w-64 bg-white shadow-lg rounded-lg"
            ref={notificationsRef}
          >
            {user?.notification && user.notification.length > 0 ? (
              user.notification
                .slice()
                .reverse()
                .map((note, index) => (
                  <li
                    key={index}
                    className="p-2 border-b text-gray-800 border-gray-200 last:border-none"
                  >
                    {note}
                  </li>
                ))
            ) : (
              <li className="p-2 text-center text-gray-500">
                No notifications
              </li>
            )}
          </ul>
        )}
      </li>
      <li>
        <a
          className="meduimL:block hidden transition text-lg hover:bg-white/10 p-2 rounded "
          href="#"
        >
          Chat
        </a>
      </li>
    </ul>
  );
};

export default UserTitles;

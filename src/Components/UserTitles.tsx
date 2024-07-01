import React from "react";
import SearchInput from "./SearchInput";
const UserTitles: React.FC = () => {
  return (
    <ul className="flex md:flex items-center gap-6 text-sm">
      <SearchInput />
      <li>
        <a
          className="meduimL:block hidden transition hover:text-gray-500/75"
          href="#"
        >
          About
        </a>
      </li>

      <li>
        <a
          className="meduimL:block hidden transition hover:text-gray-500/75"
          href="#"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          className="meduimL:block hidden transition hover:text-gray-500/75"
          href="#"
        >
          notification
        </a>
      </li>
      <li>
        <a
          className="meduimL:block hidden  transition hover:text-gray-500/75"
          href="#"
        >
          Chat
        </a>
      </li>
    </ul>
  );
};

export default UserTitles;

import React from "react";
import { FaBell } from "react-icons/fa";

import SearchInput from "./SearchInput";
const UserTitles: React.FC = () => {
  return (
    <ul className="flex md:flex items-center gap-6 mr-10 text-sm">
      <SearchInput />

      <li>
        <a className="meduimL:block hidden transition cursor-pointer text-lg hover:bg-white/10 p-2 rounded">
          <FaBell />
        </a>
      </li>
      <li>
        <a
          className="meduimL:block hidden  transition text-lg hover:bg-white/10 p-2 rounded "
          href="#"
        >
          Chat
        </a>
      </li>
    </ul>
  );
};

export default UserTitles;

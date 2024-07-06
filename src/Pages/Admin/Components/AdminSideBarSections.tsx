import React from "react";

const AdminSideBarSections: React.FC = () => {
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
          href="/Projects"
          className="block text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="/Projects-to-do"
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
    </ul>
  );
};

export default AdminSideBarSections;

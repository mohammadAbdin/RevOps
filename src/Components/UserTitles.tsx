// import React, { useState } from "react";
// import { FaBell } from "react-icons/fa";

// import SearchInput from "./SearchInput";
// import UserType from "../Types/UserType"; // Adjust the import path as needed

// interface Props {
//   user: UserType | undefined;
// }

// const UserTitles: React.FC<Props> = ({ user }) => {
//   const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);

//   const toggleNotifications = () => {
//     setIsNotificationsVisible(!isNotificationsVisible);
//   };

//   return (
//     <ul className="flex md:flex items-center gap-6 mr-10 text-sm relative">
//       <SearchInput />
//       <li className="relative">
//         <a
//           className="meduimL:block hidden transition cursor-pointer text-lg hover:bg-white/10 p-2 rounded"
//           onClick={toggleNotifications}
//         >
//           <FaBell />
//         </a>
//         {isNotificationsVisible && (
//           <ul className="absolute right-0 top-full mt-2 w-64 bg-white shadow-lg rounded-lg">
//             {user?.notification && user.notification.length > 0 ? (
//               user.notification
//                 .slice()
//                 .reverse()
//                 .map((note, index) => {
//                   console.log(note);
//                   console.log(user.notification);

//                   return (
//                     <li
//                       key={index}
//                       className="p-2 border-b text-gray-800 border-gray-200 last:border-none"
//                     >
//                       {note}
//                     </li>
//                   );
//                 })
//             ) : (
//               <li className="p-2 text-center text-gray-500">
//                 No notifications
//               </li>
//             )}
//           </ul>
//         )}
//       </li>
//       <li>
//         <a
//           className="meduimL:block hidden transition text-lg hover:bg-white/10 p-2 rounded "
//           href="#"
//         >
//           Chat
//         </a>
//       </li>
//     </ul>
//   );
// };

// export default UserTitles;
import React, { useState, useRef, useEffect } from "react";
import { FaBell } from "react-icons/fa";

import SearchInput from "./SearchInput";
import UserType from "../Types/UserType"; // Adjust the import path as needed

interface Props {
  user: UserType | undefined;
}

const UserTitles: React.FC<Props> = ({ user }) => {
  const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);
  const notificationsRef = useRef<HTMLLIElement>(null); // Correct type for li element

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
          className="meduimL:block hidden transition cursor-pointer text-lg hover:bg-white/10 p-2 rounded"
          onClick={toggleNotifications}
        >
          <FaBell />
        </a>
        {isNotificationsVisible && (
          <ul className="absolute right-0 top-full mt-2 w-64 bg-white shadow-lg rounded-lg">
            {user?.notification && user.notification.length > 0 ? (
              user.notification
                .slice()
                .reverse()
                .map((note, index) => (
                  <li
                    key={index}
                    className="p-2 border-b text-gray-800 border-gray-200 last:border-none"
                    ref={notificationsRef} // Assign the ref here
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

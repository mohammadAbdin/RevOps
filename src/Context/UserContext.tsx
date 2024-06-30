import React, { createContext, ReactNode, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import UserType from "../Types/UserType";

export const UserContext = createContext<any>(undefined);

interface UserContextProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState<UserType>();

  const contextValue: any = {
    isLogedIn,
    setIsLogedIn,
    isAdmin,
    setIsAdmin,
    user,
    setUser,
    //export the functions
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

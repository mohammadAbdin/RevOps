import React, { createContext, ReactNode, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import UserType from "../Types/UserType";
type UserContextType = {
  isLogedIn: boolean;
  setIsLogedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserType | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
  // Add other properties and methods here
};
export const UserContext = createContext<UserContextType>({
  isLogedIn: false,
  setIsLogedIn: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
  user: undefined,
  setUser: () => {},
  // Add other properties and methods with default values
});
interface UserContextProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState<UserType>();
  useEffect(() => {
    console.log(user);
  }, [user]);
  const contextValue: UserContextType = {
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

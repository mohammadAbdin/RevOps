import React, { createContext, ReactNode, useEffect, useState } from "react";
import UserType from "../Types/UserType";
type UserContextType = {
  isLogedIn: boolean;
  setIsLogedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserType | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
};
export const UserContext = createContext<UserContextType>({
  isLogedIn: false,
  setIsLogedIn: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
  user: undefined,
  setUser: () => {},
});
interface UserContextProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState<UserType | undefined>();
  useEffect(() => {
    console.log(user);
    if (user?.isAdmin) {
      setIsAdmin(true);
    }
  }, [user]);
  const contextValue: UserContextType = {
    isLogedIn,
    setIsLogedIn,
    isAdmin,
    setIsAdmin,
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

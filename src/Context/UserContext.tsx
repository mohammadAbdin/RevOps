import React, { createContext, ReactNode, useEffect, useState } from "react";
import UserType from "../Types/UserType";
import { determineSearchDataPropsType } from "../Types/determineSearchDataPropsType";
import ProjectType from "../Types/ProjectType";
type UserContextType = {
  isLogedIn: boolean;
  setIsLogedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserType | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
  determineSearchData: (data: determineSearchDataPropsType) => void;
  searchData?: Result;
};
export const UserContext = createContext<UserContextType>({
  isLogedIn: false,
  setIsLogedIn: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
  user: undefined,
  setUser: () => {},
  determineSearchData: () => {},
  searchData: {} as Result,
});
interface UserContextProps {
  children: ReactNode;
}

interface Result {
  [x: string]: string | undefined;
}

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchData, setSearchData] = useState<Result>();
  const [user, setUser] = useState<UserType | undefined>();
  const determineSearchData = (data: determineSearchDataPropsType) => {
    function transformData(data: ProjectType): Result {
      const result: Result = { [`${data.project_title}`]: data._id };
      data.tags;
      data.tags.map((tag) => {
        result[tag] = tag;
      });

      return result;
    }
    const transformedData = data.data
      ?.map((project) => {
        return transformData(project);
      })
      .reduce((acc: Result, obj: Result) => {
        return { ...acc, ...obj };
      });

    setSearchData(transformedData);
  };
  useEffect(() => {
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
    determineSearchData,
    searchData,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import UserType from "../Types/UserType";

interface UseGetTokensReturn {
  tokens: number;
  setTokens: (tokens: number) => void;
  isLoading: boolean;
}

const fetchData = async (
  setIsLogedIn: (isLogedIn: boolean) => void,
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>
): Promise<void> => {
  try {
    const token = Cookies.get("token");

    if (!token) {
      console.log("there is no token");
    } else {
      const response = await fetch(
        "http://localhost:5000/LogIn/protectedRoute",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        setIsLogedIn(true);
        setUser(data);
      } else {
        console.error("Failed to fetch data");
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const useGetTokens = (
  setIsLogedIn: (isLogedIn: boolean) => void,
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>
): UseGetTokensReturn => {
  const [tokens, setTokens] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const asyncFetch = async () => {
      await fetchData(setIsLogedIn, setUser);
      setIsLoading(false);
    };

    asyncFetch();
  }, [setIsLogedIn, setUser]);

  return {
    tokens,
    setTokens,
    isLoading,
  };
};

export default useGetTokens;

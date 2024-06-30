import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import UserType from "../Types/UserType";

interface UseGetTokensProps {
  setIsLogedIn: (isLogedIn: boolean) => void;
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
}
interface UseGetTokensReturn {
  tokens: number;
}
const fetchData = async (
  setIsLogedIn: (isLogedIn: boolean) => void,
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>
) => {
  try {
    const token = Cookies.get("token");
    console.log(token);
    const response = await fetch("http://localhost:5000/LogIn/protectedRoute", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Data received:", data);
      setIsLogedIn(true);
      setUser(data);
    } else {
      console.error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    console.log(setIsLogedIn);
  }
};
const useGetTokens = (
  setIsLogedIn: (isLogedIn: boolean) => void,
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>
): UseGetTokensReturn => {
  const [tokens, setTokens] = useState<number>(0);

  useEffect(() => {
    fetchData(setIsLogedIn, setUser);
  }, []);
  //declare functions here
  return {
    //export functions here
    tokens,
  };
};

export default useGetTokens;

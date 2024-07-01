import { useEffect, useState } from "react";

interface UseGetTokensReturn {
  tokens: number;
  setTokens: (tokens: number) => void;
}

const useGetUserProjects = (): UseGetTokensReturn => {
  const [tokens, setTokens] = useState<number>(0);

  useEffect(() => {}, []);
  //declare functions here
  return {
    //export functions here
    tokens,
    setTokens,
  };
};

export default useGetUserProjects;

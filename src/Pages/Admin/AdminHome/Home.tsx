import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

import useGetTokens from "../../../Hooks/UseGetTokens";

const Home: React.FC = () => {
  const { setIsLogedIn, isLogedIn, setUser, user } = useContext(UserContext);
  const { tokens } = useGetTokens(setIsLogedIn, setUser);
  console.log(tokens);
  console.log("isLogedIn", isLogedIn);

  return (
    <div className="w-full home">{user ? <p>{user.name}</p> : <p>lo</p>}</div>
  );
};

export default Home;

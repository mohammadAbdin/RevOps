import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

import useGetTokens from "../../Hooks/UseGetTokens";
import UserType from "../../Types/UserType";

const Home: React.FC = () => {
  const { setIsLogedIn, isLogedIn, setUser, user } = useContext(UserContext);
  const { tokens } = useGetTokens(setIsLogedIn, setUser);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="w-full home">{user ? <p>{user.name}</p> : <p>lo</p>}</div>
  );
};

export default Home;

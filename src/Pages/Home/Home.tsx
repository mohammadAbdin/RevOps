import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";

import useGetTokens from "../../Hooks/UseGetTokens";

const Home: React.FC = () => {
  const { setIsLogedIn, setUser, user } = useContext(UserContext);
  const { tokens } = useGetTokens(setIsLogedIn, setUser);
  console.log(tokens);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="w-full home">{user ? <p>{user.name}</p> : <p>lo</p>}</div>
  );
};

export default Home;

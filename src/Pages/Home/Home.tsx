import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import "react-toastify/dist/ReactToastify.css";
import useGetTokens from "../../Hooks/UseGetTokens";

const Home: React.FC = () => {
  const { setIsLogedIn, setUser, user } = useContext(UserContext);
  useGetTokens(setIsLogedIn, setUser);

  return (
    <div className="w-full home">{user ? <p>{user.name}</p> : <p>lo</p>}</div>
  );
};

export default Home;

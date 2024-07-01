import { useContext } from "react";
// import useProjects from "../../Hooks/UseProjects";
import { UserContext } from "../../Context/UserContext";

import useGetTokens from "../../Hooks/UseGetTokens";

const Projects: React.FC = () => {
  const { setIsLogedIn, setUser } = useContext(UserContext);
  const { tokens } = useGetTokens(setIsLogedIn, setUser);
  console.log(tokens);

  return <div className="w-full home">Projects</div>;
};

export default Projects;

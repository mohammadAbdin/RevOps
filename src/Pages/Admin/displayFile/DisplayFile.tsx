import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import useGetFileContent from "../../../Hooks/UseGetFileContent";
import useGetTokens from "../../../Hooks/UseGetTokens";
import Divider from "../../../Components/Divider";
import { useParams, useLocation } from "react-router-dom";
import { highlightSyntax } from "../../../highlightSyntax/highlightSyntax";
// import CryptoJS from 'crypto-js';

type AdminContentType = {
  [key: number]: string;
};
const ProjectsToDo: React.FC = () => {
  const location = useLocation();
  console.log(location.state);
  const [adminContent, setAdminContent] = useState<AdminContentType[]>([]);
  const handleChange = (index: number, value: string) => {
    console.log(adminContent);

    setAdminContent((prev) => {
      const newContent = [...prev];
      if (newContent[index]) {
        newContent[index] = value;
      } else {
        newContent[`${index}`] = value;
      }
      return newContent;
    });
  };

  const { encodedUrl } = useParams();
  let url: string = "";
  if (encodedUrl) {
    url = decodeURIComponent(encodedUrl);
    console.log(url);
  }
  const { setIsLogedIn, setUser, isAdmin } = useContext(UserContext);

  const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  const { getFileContent, fileContent, file } = useGetFileContent();

  useEffect(() => {
    console.log(adminContent);
  }, [adminContent]);
  useEffect(() => {
    if (!isLoading && !fileContent) {
      getFileContent(url);
    }
  }, [isLoading, getFileContent, fileContent, url, file]);
  if (isLoading || fileContent === null) {
    return (
      <div
        className="spinner inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-red-200 border-t-black"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex-grow h-full flex flex-col gap-0 home">
      <Divider text="My Projects" />
      <div className="mb-8 lg:mb-16"></div>
      {isAdmin ? (
        <div className="h-full bg-gray-900 mb-10 p-4 pl-10 pt-8 rounded-lg">
          <div className="h-full flex flex-col items-start text-white">
            {fileContent.split("\n").map((line, index) => (
              <input
                key={index}
                style={{
                  outline: "none",
                }}
                className="border-none bg-gray-900 whitespace-wrap break-word w-full"
                onChange={(e) => {
                  handleChange(index, e.target.value);
                }}
                value={adminContent[index] ? adminContent[index] : line}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="h-full bg-gray-900 mb-10 p-4 pl-10 pt-8 rounded-lg">
          <div className="h-full flex flex-col items-start text-white">
            {highlightSyntax(fileContent.split("\n"))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsToDo;

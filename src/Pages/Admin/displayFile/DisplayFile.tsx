import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import useGetFileContent from "../../../Hooks/UseGetFileContent";
import useGetTokens from "../../../Hooks/UseGetTokens";
import Divider from "../../../Components/Divider";
import { useParams } from "react-router-dom";

const ProjectsToDo: React.FC = () => {
  const [adminContent, setAdminContent] = useState("");

  const handleAdminChange = (e) => {
    setAdminContent(e.target.value);
  };
  const { encodedUrl } = useParams();
  let url: string = "";
  if (encodedUrl) {
    url = decodeURIComponent(encodedUrl);
    console.log(url);
  }
  const { setIsLogedIn, setUser, isAdmin } = useContext(UserContext);

  const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  const { getFileContent, fileContent } = useGetFileContent();

  useEffect(() => {
    if (!isLoading && !fileContent) {
      getFileContent(url);
    }
  }, [isLoading, getFileContent, fileContent, url]);

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
  const lines = fileContent.split("\n");
  console.log(lines);
  const highlightSyntax = (text: string[]) => {
    const lines = text;
    console.log(lines);

    return lines.map((line, index) => {
      const keyValuePattern = /^([\w-]+)\s*:\s*(.+);?$/;

      console.log(isAdmin);
      if (line.trim().endsWith("{") || line.trim().endsWith("}")) {
        return (
          <span
            className="text-left border-none  text-bold text-yellow-200 whitespace-pre-wrap break-words"
            key={index}
            style={{
              outline: "none",
            }}
          >
            {line}
          </span>
        );
      }

      const match = keyValuePattern.exec(line.trim());

      if (match) {
        const [, key, value] = match;

        return (
          <div key={index}>
            <span
              className="text-left text-blue-400  border-none  whitespace-pre-wrap break-words"
              style={{
                outline: "none",
              }}
            >
              {key}
            </span>

            <span className="text-left text-white"> : </span>
            <span className="text-left text-green-500">{value}</span>
          </div>
        );
      }

      return (
        <span
          className="text-left"
          key={index}
          style={{
            fontFamily: "monospace",
          }}
        >
          {line}
        </span>
      );
    });
  };
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
                className="border-none bg-gray-900 whitespace-wrap break-word"
                onChange={() => {
                  // e.target.value =
                }}
                value={line}
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

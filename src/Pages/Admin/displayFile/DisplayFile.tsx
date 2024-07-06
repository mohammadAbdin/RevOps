import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import useGetFileContent from "../../../Hooks/UseGetFileContent";
import useAdminReview from "../../../Hooks/UseAdminReview";
import useGetTokens from "../../../Hooks/UseGetTokens";
import Divider from "../../../Components/Divider";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { highlightSyntax } from "../../../highlightSyntax/highlightSyntax";
import extractFileNameFromUrl from "../../../Functions/extractFileNameFromUrl";
import distructuringFeedBack from "../../../Functions/distructuringFeedBack";
import deleteProject from "../../../API/deleteProjectRequest";
import { showToastInfoMessage } from "../../../Components/Toast/Toasts";
export type AdminContentType = (string | null)[];

const ProjectsToDo: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { url, projectId, project_title, path, feedBack } =
    location.state || {};
  const { handleSubmitReview } = useAdminReview();
  const [adminContent, setAdminContent] = useState<
    AdminContentType | undefined
  >([]);
  const [feedBackInput, setFeedBackInput] = useState<string>("");
  const fileName: string = extractFileNameFromUrl(url);

  const handleChange = (index: number, value: string | null) => {
    setAdminContent((prev) => {
      if (prev !== undefined) {
        const newContent = [...prev];
        if (
          value !== null &&
          (newContent[index] || newContent[index] == null)
        ) {
          newContent[index] = value;
        }
        return newContent;
      }
      return prev;
    });
  };
  const { encodedUrl } = useParams();
  let fileUrl: string = "";
  if (encodedUrl) {
    fileUrl = decodeURIComponent(encodedUrl);
  }
  const { setIsLogedIn, setUser, isAdmin } = useContext(UserContext);

  const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  const { getFileContent, fileContent, file } = useGetFileContent();

  useEffect(() => {
    distructuringFeedBack(
      feedBack,
      fileName,
      setAdminContent,
      setFeedBackInput
    );
  }, [feedBack, fileName]);
  useEffect(() => {}, [adminContent]);
  useEffect(() => {
    if (!isLoading && !fileContent) {
      getFileContent(fileUrl);
    }
  }, [isLoading, getFileContent, fileContent, fileUrl, file]);
  if (isLoading || fileContent === null) {
    return (
      <div
        className="spinner mt-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-red-200 border-t-black"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex-grow h-full flex flex-col gap-0 home">
      <Divider text="" />
      <div className="mb-8 lg:mb-16"></div>
      <h1 className="bg-gray-900 w-full text-white rounded-t-lg border-b-4 border-white text-3xl py-2 px-4">
        {project_title}
      </h1>

      <h3 className="bg-gray-900 text-left w-full text-white border-b-2 border-white text-lg py-1 px-4">
        {path}
      </h3>
      {isAdmin ? (
        <div className="h-full bg-gray-900 mb-10 p-4 pl-10 pt-8 rounded-b-lg">
          <div className="h-full flex flex-col items-start text-white">
            {fileContent?.split("\n").map((line, index) => (
              <input
                key={index}
                style={{
                  outline: "none",
                }}
                className="border-none bg-gray-900 whitespace-wrap break-word w-full"
                onChange={(e) => {
                  handleChange(index, e.target.value);
                }}
                value={
                  adminContent !== undefined && adminContent[index]
                    ? adminContent[index]
                    : line
                }
              />
            ))}
          </div>

          <div className="w-full flex flex-col mt-8">
            <label htmlFor="feedBack" className="text-gray-700 text-left">
              FeedBack
            </label>
            <textarea
              id="feedBack"
              rows={4}
              value={feedBackInput}
              onChange={(e) => {
                setFeedBackInput(e.target.value);
              }}
              className="w-full bg-gray-200 border-2 border-gray-300 rounded-lg px-4 py-2 text-gray-800 resize-none focus:outline-none focus:border-blue-500 focus:bg-white"
            ></textarea>
          </div>

          <div className="w-full flex flex-row justify-between p-8">
            <button
              className="rounded-md bg-red-800 px-5 py-2.5 text-sm font-medium text-white shadow"
              onClick={() => {
                deleteProject(projectId);
                navigate("/Projects-to-do");
              }}
            >
              Delete Project
            </button>
            <button
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
              onClick={() => {
                showToastInfoMessage(
                  "Your edits have been successfully applied"
                );
                handleSubmitReview(url, adminContent, feedBackInput, projectId);
                navigate(`/Projects-to-do/ReviewProject/${projectId}`);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="h-full bg-gray-900 mb-10 p-4 pl-10 pt-8 rounded-lg">
          <div className="h-full flex flex-col items-start text-white">
            {highlightSyntax(fileContent?.split("\n"), adminContent)}
          </div>
          <div className="w-full flex flex-col p-8 mt-8 ">
            <label htmlFor="feedBack" className="text-gray-700 text-left ">
              FeedBack
            </label>
            <textarea
              id="feedBack"
              rows={4}
              onChange={() => {}}
              value={feedBackInput}
              className="w-full bg-gray-200 border-2 border-gray-300 rounded-lg px-4 py-2 text-gray-800 resize-none focus:outline-none focus:border-blue-500 focus:bg-white"
            ></textarea>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsToDo;

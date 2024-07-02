import React from "react";
import { FaFolder, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
interface Item {
  type: "tree" | "blob";
  path: string;
  url: string;
}

const FoldersAndFilesStructure: React.FC<{
  staticData: Item[];
  projectId: string | undefined;
  project_title: string;
}> = ({ staticData, projectId, project_title }) => {
  // const location = useLocation();
  const randomNumber = Math.floor(Math.random() * 200) + 1;
  const navigate = useNavigate();

  return (
    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 bg-white">
      <thead className="bg-gray-50">
        <tr>
          <th
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            colSpan={2}
          >
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Last commit message
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Last commit date
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {/* <tr className="hover:bg-gray-50">
          <td
            className="px-6 py-4 whitespace-nowrap flex items-center"
            colSpan={2}
          >
            {" "}
            <Link
              state={
                {
                  // url: item.url,
                  // projectId: projectId,
                  // project_title: project_title,
                }
              }
              to={{
                pathname: `/Projects-to-do/ReviewProject/internal/${randomNumber}`,
              }}
            >
              <FaFolder
                className="text-yellow-500 mr-2 cursor-pointer"
                onClick={() => {
                  // setTimeout(() => {
                  //   window.location.reload();
                  // }, 1000);
                }}
              />
            </Link>
            <button
              onClick={() => {
                // console.log("hi");
                // window.location.reload();
              }}
              className="text-blue-600 text-left hover:underline"
            >
              <Link
                // state={{ url: item.url, projectId: projectId }}
                to={{
                  pathname: `/Projects-to-do/ReviewProject/internal/${randomNumber}`,
                }}
              >
                . . .
              </Link>
            </button>
          </td>
          <td className="px-6 py-4 whitespace-nowrap"></td>
          <td className="px-6 py-4 whitespace-nowrap"></td>
        </tr> */}
        {staticData.map((item, index) => {
          return (
            <tr key={index} className="hover:bg-gray-50">
              <td
                className="px-6 py-4 whitespace-nowrap flex items-center"
                colSpan={2}
              >
                {item.type == "tree" ? (
                  <Link
                    state={{
                      url: item.url,
                      projectId: projectId,
                      project_title: project_title,
                    }}
                    to={{
                      pathname: `/Projects-to-do/ReviewProject/internal/${randomNumber}`,
                    }}
                  >
                    <FaFolder
                      className="text-yellow-500 mr-2 cursor-pointer"
                      onClick={() => {
                        if (item.type === "tree")
                          setTimeout(() => {
                            window.location.reload();
                          }, 1000);
                      }}
                    />
                  </Link>
                ) : (
                  <FaFileAlt
                    onClick={() => {
                      const encodedUrl = encodeURIComponent(item.url);

                      navigate(`/file/content/${encodedUrl}`);
                    }}
                    className="text-blue-500 mr-2"
                  />
                )}
                <button
                  onClick={() => {
                    if (item.type === "tree") window.location.reload();
                  }}
                  className="text-blue-600 hover:underline"
                  title={item.path}
                >
                  <Link
                    state={{ url: item.url, projectId: projectId }}
                    to={{
                      pathname: `/Projects-to-do/ReviewProject/internal/${randomNumber}`,
                    }}
                  >
                    {item.path}
                  </Link>
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {/* <a
                  href={item.url} // .url
                  className="text-blue-600 hover:underline"
                >
                </a> */}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {/* <time dateTime={item.commitDateTime} title={item.commitDate}>
                </time> */}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FoldersAndFilesStructure;

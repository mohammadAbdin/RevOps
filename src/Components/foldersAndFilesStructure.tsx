import React from "react";
import { FaFolder, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
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
  console.log(project_title);

  const randomNumber = Math.floor(Math.random() * 200) + 1;
  // const navigate = useNavigate();

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
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {staticData.map((item, index) => {
          const encodedUrl = encodeURIComponent(item.url);
          return (
            <tr key={index} className="hover:bg-gray-50">
              <td
                className="px-6 py-4 whitespace-nowrap flex items-center ml-10"
                colSpan={2}
              >
                {item.type == "tree" ? (
                  <Link
                    state={{
                      path: item.path,
                      url: item.url,
                      project_title: project_title,
                      projectId: projectId,
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
                  <Link
                    state={{
                      path: item.path,
                      url: item.url,
                      projectId: projectId,
                      project_title: project_title,
                    }}
                    to={{
                      pathname: `/file/content/${encodedUrl}`,
                    }}
                  >
                    <FaFileAlt className="text-blue-500 mr-2" />
                  </Link>
                )}
                {item.type === "tree" ? (
                  <button
                    onClick={() => {
                      if (item.type === "tree") window.location.reload();
                    }}
                    className="text-blue-600 hover:underline"
                    title={item.path}
                  >
                    <Link
                      state={{
                        path: item.path,
                        url: item.url,
                        projectId: projectId,
                      }}
                      to={{
                        pathname: `/Projects-to-do/ReviewProject/internal/${randomNumber}`,
                      }}
                    >
                      {item.path}
                    </Link>
                  </button>
                ) : (
                  <Link
                    state={{
                      path: item.path,
                      url: item.url,
                      projectId: projectId,
                      project_title: project_title,
                    }}
                    to={{
                      pathname: `/file/content/${encodedUrl}`,
                    }}
                  >
                    <button
                      className="text-blue-600 hover:underline"
                      title={item.path}
                    >
                      {item.path}
                    </button>
                  </Link>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FoldersAndFilesStructure;

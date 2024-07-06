// import { GitHubProjectResponse } from "../Types/GithubProjectRequestReturnType";

// export const getGitHubProjectInternalForReviewingRequest = async (
//   projectId: string | undefined,
//   url: string | undefined
// ): Promise<GitHubProjectResponse | null> => {
//   try {
//     let encodedUrl: string;
//     if (url != undefined) encodedUrl = encodeURIComponent(url);
//     else encodedUrl = encodeURIComponent("");

//     const response: Response = await fetch(
//       `http://localhost:5000/Admin/gitHub/folder/${encodedUrl}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (response.ok) {
//       const result: GitHubProjectResponse = await response.json();

//       return result;
//     } else {
//       console.error("Failed to fetch projects:", response.status);
//       return null;
//     }
//   } catch (error) {
//     console.error("Error fetching projects:", error);
//     return null;
//   }
// };
import axios from "axios";
import { GitHubProjectResponse } from "../Types/GithubProjectRequestReturnType";

export const getGitHubProjectInternalForReviewingRequest = async (
  projectId: string | undefined,
  url: string | undefined
): Promise<GitHubProjectResponse | null> => {
  try {
    // Encode the URL or default to an empty string
    const encodedUrl = encodeURIComponent(url ?? "");

    const response = await axios.get<GitHubProjectResponse>(
      `http://localhost:5000/Admin/gitHub/folder/${encodedUrl}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // Include if your server requires credentials
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(
          "Failed to fetch project:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    } else {
      console.error("Unexpected Error:", error);
    }
    return null;
  }
};

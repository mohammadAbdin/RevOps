// import UserType from "../Types/UserType";
// import ProjectType from "../Types/ProjectType";

// export const getUserProjectsRequest = async (
//   user: UserType
// ): Promise<ProjectType[] | null> => {
//   const id = user._id;

//   try {
//     const response: Response = await fetch(
//       `http://localhost:5000/Project/user/${id}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (response.ok) {
//       const projects: ProjectType[] = await response.json();

//       return projects;
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
import UserType from "../Types/UserType";
import ProjectType from "../Types/ProjectType";

export const getUserProjectsRequest = async (
  user: UserType
): Promise<ProjectType[] | null> => {
  const id = user._id;

  try {
    const response = await axios.get<ProjectType[]>(
      `http://localhost:5000/Project/user/${id}`,
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
          "Failed to fetch projects:",
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

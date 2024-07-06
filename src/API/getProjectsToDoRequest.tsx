// import ProjectType from "../Types/ProjectType";

// export const getProjectsToDoRequest = async (): Promise<
//   ProjectType[] | null
// > => {
//   try {
//     const response: Response = await fetch(
//       `http://localhost:5000/Project/Projects-to-do`,
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
import ProjectType from "../Types/ProjectType";

export const getProjectsToDoRequest = async (): Promise<
  ProjectType[] | null
> => {
  try {
    const response = await axios.get<ProjectType[]>(
      "http://localhost:5000/Project/Projects-to-do",
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

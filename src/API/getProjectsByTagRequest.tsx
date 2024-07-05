// import ProjectType from "../Types/ProjectType";

// export const getProjectsByTagRequest = async (
//   tag: string | undefined
// ): Promise<ProjectType[] | null> => {
//   try {
//     const response: Response = await fetch(
//       `http://localhost:5000/Project/projects-by-tag/${tag}`,
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
import axios, { AxiosError } from "axios";
import ProjectType from "../Types/ProjectType";

export const getProjectsByTagRequest = async (
  tag: string | undefined
): Promise<ProjectType[] | null> => {
  try {
    const response = await axios.get<ProjectType[]>(
      `http://localhost:5000/Project/projects-by-tag`,
      {
        params: { tag }, // Pass tag as a query parameter
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error("Axios Error:", axiosError.message);
      console.error("Response:", axiosError.response);
    } else {
      console.error("Error:", error);
    }
    return null;
  }
};

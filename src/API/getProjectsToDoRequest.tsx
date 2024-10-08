import axios from "axios";
import ProjectType from "../Types/ProjectType";

export const getProjectsToDoRequest = async (): Promise<
  ProjectType[] | null
> => {
  try {
    const response = await axios.get<ProjectType[]>(
      "https://rev-ops-code-review-site.onrender.com/Project/Projects-to-do",
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error("Failed to fetch projects:", error.response.status);
        if (error.response.data.message == "No projects to do found.")
          return error.response.data.message;
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

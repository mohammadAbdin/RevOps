import axios from "axios";
import ProjectType from "../Types/ProjectType";

export const addProjectRequest = async (projectData: ProjectType) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/Project/add-project",
      projectData,
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
        console.error("Server Error:", error.response.data);
      } else if (error.request) {
        console.error("No Response:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    } else {
      console.error("Unexpected Error:", error);
    }
  }
};

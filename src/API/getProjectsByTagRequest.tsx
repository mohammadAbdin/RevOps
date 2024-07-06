import axios, { AxiosError } from "axios";
import ProjectType from "../Types/ProjectType";

export const getProjectsByTagRequest = async (
  tag: string | undefined
): Promise<ProjectType[] | null> => {
  try {
    const response = await axios.get<ProjectType[]>(
      `https://rev-ops-code-review-site.onrender.com/Project/projects-by-tag`,
      {
        params: { tag },
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

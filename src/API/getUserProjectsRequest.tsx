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
        withCredentials: true,
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

import UserType from "../Types/UserType";
import ProjectType from "../Types/ProjectType";

export const getUserProjectsRequest = async (
  user: UserType
): Promise<ProjectType[] | null> => {
  const id = user._id;
  console.log(id);

  try {
    const response: Response = await fetch(
      `http://localhost:5000/Project/user/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const projects: ProjectType[] = await response.json();
      console.log(projects);

      return projects;
    } else {
      console.error("Failed to fetch projects:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
    return null;
  }
};

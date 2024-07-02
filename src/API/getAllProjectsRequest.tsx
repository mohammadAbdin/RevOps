import ProjectType from "../Types/ProjectType";

export const getAllProjectsRequest = async (): Promise<
  ProjectType[] | null
> => {
  try {
    const response: Response = await fetch(
      `http://localhost:5000/Project/allProjects`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const projects: ProjectType[] = await response.json();

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

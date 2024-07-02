import ProjectType from "../Types/ProjectType";

export const addProject = async (projectData: ProjectType) => {
  try {
    const response = await fetch(`http://localhost:5000/Project/add-project`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      console.log(errorData);
    }
  } catch (error: unknown) {
    console.error("Fetch Error:");
  }
};

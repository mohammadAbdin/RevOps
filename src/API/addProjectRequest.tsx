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
    console.log(projectData);

    if (response.ok) {
      console.log(response);

      const data = await response.json();
      console.log("data", data);
      return data;
    } else {
      console.log("li");
      const errorData = await response.json();
      console.log(errorData);
    }
  } catch (error: unknown) {
    console.error("Fetch Error:");
  }
};

import axios from "axios";

const deleteProject = async (projectId: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/Project/delete-project/${projectId}`
    );
    if (response.status === 200) {
      console.log("Project deleted successfully");
    } else {
      alert("Failed to delete the project");
    }
  } catch (error: unknown) {
    alert("Error deleting project:");
  }
};

export default deleteProject;

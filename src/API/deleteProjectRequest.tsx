import axios from "axios";
import { showToastSuccessMessage } from "../Components/Toast/Toasts";

const deleteProject = async (projectId: string) => {
  try {
    const response = await axios.delete(
      `https://rev-ops-code-review-site.onrender.com/Project/delete-project/${projectId}`
    );
    if (response.status === 200) {
      showToastSuccessMessage("Project deleted successfully");
    } else {
      alert("Failed to delete the project");
    }
  } catch (error: unknown) {
    alert("Error deleting project:");
  }
};

export default deleteProject;

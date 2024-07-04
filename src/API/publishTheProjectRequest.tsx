import axios from "axios";

export const publishTheProjectRequest = async (_id: string | undefined) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/Project/publish-project/${_id}`
    );

    console.log("update project status:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding feedback and edits:", error);
  }
};

import axios from "axios";

export const publishTheProjectRequest = async (_id: string | undefined) => {
  try {
    const response = await axios.put(
      `https://rev-ops-code-review-site.onrender.com/Project/publish-project/${_id}`
    );

    return response.data;
  } catch (error) {
    console.error("Error adding feedback and edits:", error);
  }
};

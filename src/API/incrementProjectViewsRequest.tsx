import axios from "axios";

export const updateTheProjectViewsRequest = async (_id: string | undefined) => {
  try {
    const response = await axios.put(
      `https://rev-ops-code-review-site.onrender.com/Project/update-project-views/${_id}`
    );

    return response.data;
  } catch (error) {
    console.error("Error adding feedback and edits:", error);
  }
};

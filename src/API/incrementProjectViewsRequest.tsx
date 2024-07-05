import axios from "axios";

export const updateTheProjectViewsRequest = async (_id: string | undefined) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/Project/update-project-views/${_id}`
    );

    console.log("update project views:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding feedback and edits:", error);
  }
};

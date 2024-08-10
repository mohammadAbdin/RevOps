import axios from "axios";

export const addNotificationRequest = async (
  notification: string,
  userId: string | undefined
) => {
  try {
    await axios.post(
      "http://localhost:5000/LogIn/add-notification",
      { notification: notification, userId: userId },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
      } else if (error.request) {
        console.error("No Response:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    } else {
      console.error("Unexpected Error:", error);
    }
  }
};

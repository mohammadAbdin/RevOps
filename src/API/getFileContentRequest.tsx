import axios from "axios";

export const getFileContentRequest = async (
  url: string | undefined
): Promise<{ content: string } | null> => {
  try {
    if (!url) {
      console.error("URL is undefined.");
      return null;
    }

    const encodedUrl = encodeURIComponent(url);

    const response = await axios.get<{ content: string }>(
      `https://rev-ops-code-review-site.onrender.com/file/content/${encodedUrl}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(
          "Failed to fetch file content:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    } else {
      console.error("Unexpected Error:", error);
    }
    return null;
  }
};

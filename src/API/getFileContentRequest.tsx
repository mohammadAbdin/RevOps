// export const getFileContentRequest = async (
//   url: string | undefined
// ): Promise<string | null> => {
//   try {
//     let encodedUrl: string = "";
//     if (url != undefined) encodedUrl = encodeURIComponent(url);

//     const response: Response = await fetch(
//       `http://localhost:5000/file/content/${encodedUrl}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (response.ok) {
//       const result: any = await response.json();
//       console.log(result);

//       return result;
//     } else {
//       console.error("Failed to fetch projects:", response.status);
//       return null;
//     }
//   } catch (error) {
//     console.error("Error fetching projects:", error);
//     return null;
//   }
// };
import axios from "axios";

export const getFileContentRequest = async (
  url: string | undefined
): Promise<string | null> => {
  try {
    if (!url) {
      console.error("URL is undefined.");
      return null;
    }

    const encodedUrl = encodeURIComponent(url);

    const response = await axios.get<string>(
      `http://localhost:5000/file/content/${encodedUrl}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // Include if your server requires credentials
      }
    );

    console.log(response.data);
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

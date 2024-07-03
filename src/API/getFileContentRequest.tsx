export const getFileContentRequest = async (
  url: string | undefined
): Promise<string | null> => {
  try {
    let encodedUrl: string = "";
    if (url != undefined) encodedUrl = encodeURIComponent(url);

    const response: Response = await fetch(
      `http://localhost:5000/file/content/${encodedUrl}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const result: string = await response.json();

      return result;
    } else {
      console.error("Failed to fetch projects:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
    return null;
  }
};

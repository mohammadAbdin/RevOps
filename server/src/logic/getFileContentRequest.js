import dotenv from "dotenv";
export async function getFileContentRequest(url) {
  try {
    console.log(url);
    dotenv.config(); // Make sure this is at the top

    const token = process.env.ACCOUNTS_TOKEN;
    // const commitsResponse = await fetch(commitsUrl);
    const fileResponse = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(fileResponse);
    if (!fileResponse.ok) {
      throw new Error(`HTTP error! status: ${fileResponse.status}`);
    }

    const dataContent = await fileResponse.json();

    return dataContent;
  } catch (error) {
    console.error("Error fetching or decoding content:", error);
    return null;
  }
}

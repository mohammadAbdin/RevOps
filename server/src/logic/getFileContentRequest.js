export async function getFileContentRequest(url) {
  try {
    const fileResponse = await fetch(url);

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

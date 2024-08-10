export async function getFileContentRequest(url) {
  try {
    console.log(url);
    const token = "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";

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

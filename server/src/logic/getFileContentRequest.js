// import decodeBase64 from "./getDecodedString.js";
export async function getFileContentRequest(url) {
  try {
    // console.log("Fetching URL:", url);
    const fileResponse = await fetch(url);

    if (!fileResponse.ok) {
      throw new Error(`HTTP error! status: ${fileResponse.status}`);
    }

    const dataContent = await fileResponse.json();

    // const data = decodeBase64(dataContent);
    return dataContent;
  } catch (error) {
    console.error("Error fetching or decoding content:", error);
    return null;
  }
}

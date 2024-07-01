// import decodeBase64 from "./getDecodedString.js";
export const getGithubUrls = async (url, path) => {
  const regex = /github\.com\/([^/]+)\/([^/]+)/;
  const match = url.match(regex);

  if (!match) {
    // setError("Invalid GitHub repository URL");
    return;
  }

  // Example base64 encoded content
  // const base64Content =
  //   "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICA8aGVhZD4KICAgIDxtZXRhIGNoYXJzZXQ9IlVURi04IiAvPgogICAgPGxpbmsgcmVsPSJpY29uIiB0eXBlPSJpbWFnZS9zdmcreG1sIiBocmVmPSIvdml0ZS5zdmciIC8+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCIgLz4KICAgIDx0aXRsZT5WaXRlICsgUmVhY3QgKyBUUzwvdGl0bGU+CiAgPC9oZWFkPgogIDxib2R5PgogICAgPGRpdiBpZD0icm9vdCI+PC9kaXY+CiAgICA8c2NyaXB0IHR5cGU9Im1vZHVsZSIgc3JjPSIvc3JjL21haW4udHN4Ij48L3NjcmlwdD4KICA8L2JvZHk+CjwvaHRtbD4K";

  // Decode and display the content
  // const decodedContent = decodeBase64(base64Content);
  // console.log("decodedContent", decodedContent);

  const [, owner, repo] = match;
  const apiURL = `https://api.github.com/repos/${owner}/${repo}/commits`;
  console.log("match:", match);
  // if (path == undefined) path = "";
  // const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

  const response = await fetch(apiURL);
  // console.log(apiURL);
  // console.log("apiUrl");

  const data = await response.json();
  // const commitIndex = 3;
  // console.log(data[data.length - commitIndex]);
  // console.log(commitIndex);
  // console.log(data);
  return data.length;
};

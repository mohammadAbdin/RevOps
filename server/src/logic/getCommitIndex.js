import dotenv from "dotenv";
export const getCommitIndex = async (url) => {
  const regex = /github\.com\/([^/]+)\/([^/]+)/;
  const match = url.match(regex);

  if (!match) {
    return;
  }
  dotenv.config(); // Make sure this is at the top

  const token = process.env.ACCOUNTS_TOKEN;
  const [, owner, repo] = match;
  console.log(match);
  const apiURL = `https://api.github.com/repos/${owner}/${repo}/commits`;

  const response = await fetch(apiURL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(apiURL);
  console.log("response.data", response.data);
  console.log(response);
  const data = await response.json();
  return data.length;
};

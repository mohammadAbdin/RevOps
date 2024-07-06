export const getCommitIndex = async (url) => {
  const regex = /github\.com\/([^/]+)\/([^/]+)/;
  const match = url.match(regex);

  if (!match) {
    return;
  }

  const [, owner, repo] = match;
  const apiURL = `https://api.github.com/repos/${owner}/${repo}/commits`;

  const response = await fetch(apiURL);

  const data = await response.json();
  console.log(data);
  return data.length;
};

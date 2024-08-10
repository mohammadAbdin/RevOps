export const getCommitIndex = async (url) => {
  const regex = /github\.com\/([^/]+)\/([^/]+)/;
  const match = url.match(regex);

  if (!match) {
    return;
  }
  const token = "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";

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

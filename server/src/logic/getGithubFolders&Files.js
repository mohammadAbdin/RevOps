export const getGithubFoldersAndFiles = async (githubUri, commitIndex) => {
  const regex = /github\.com\/([^/]+)\/([^/]+)/;
  const match = githubUri.match(regex);

  if (!match) {
    return "Invalid GitHub repository URL";
  }
  const [, owner, repo] = match;
  const commitsUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;

  try {
    const token = process.env.ACCOUNTS_TOKEN;

    const commitsResponse = await fetch(commitsUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const commitsData = await commitsResponse.json();
    const commit = commitsData.length - commitIndex;
    const commitSha = commitsData[commit].sha;
    const treeUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/${commitSha}`;

    const treeResponse = await fetch(treeUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const treeData = await treeResponse.json();
    const foldersAndFiles = treeData.tree;
    return foldersAndFiles;
  } catch (error) {
    console.error("Error fetching folders and files:", error);
    return null;
  }
};

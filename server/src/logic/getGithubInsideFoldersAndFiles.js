export const getGithubInsideFoldersAndFiles = async (url) => {
  const commitsUrl = url;
  try {
    const token = "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";
    const commitsResponse = await fetch(commitsUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const commitsData = await commitsResponse.json();
    console.log(commitsData.tree);

    return commitsData.tree;
  } catch (error) {
    console.error("Error fetching folders and files:", error);
    return null;
  }
};

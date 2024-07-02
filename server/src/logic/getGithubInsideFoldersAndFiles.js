export const getGithubInsideFoldersAndFiles = async (url) => {
  const commitsUrl = url;
  try {
    console.log(commitsUrl);
    const commitsResponse = await fetch(commitsUrl);
    const commitsData = await commitsResponse.json();
    console.log(commitsData);

    return commitsData.tree;
  } catch (error) {
    console.error("Error fetching folders and files:", error);
    return null;
  }
};

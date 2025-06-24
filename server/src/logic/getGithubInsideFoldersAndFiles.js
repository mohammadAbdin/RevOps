import dotenv from "dotenv";
export const getGithubInsideFoldersAndFiles = async (url) => {
  const commitsUrl = url;
  try {
    dotenv.config(); // Make sure this is at the top

    const token = process.env.ACCOUNTS_TOKEN;
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

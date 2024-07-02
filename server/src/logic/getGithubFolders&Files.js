export const getGithubFoldersAndFiles = async (githubUri, commitIndex) => {
  const regex = /github\.com\/([^/]+)\/([^/]+)/;
  const match = githubUri.match(regex);

  if (!match) {
    return "Invalid GitHub repository URL";
  }

  const [, owner, repo] = match;
  console.log(match);
  const commitsUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;

  try {
    // Fetch the commits
    const token = process.env.GITHUB_TOKEN;

    // Fetch the commits with authentication
    const commitsResponse = await fetch(commitsUrl, {
      headers: {
        Authorization: `Bearer ${token}`, // Use `Bearer` for tokens created after August 2021
      },
    });
    // const commitsResponse = await fetch(commitsUrl);
    const commitsData = await commitsResponse.json();
    console.log(commitsData, "commitsData[commit]");
    // console.log(data[data.length - commitIndex]);
    const commit = commitsData.length - commitIndex;
    // Ensure commitIndex is within bounds
    // if (commitIndex < 0 || commitIndex >= commitsData.length) {
    //   throw new Error("Invalid commit index");
    // }

    // Get the SHA of the commit at commitIndex
    const commitSha = commitsData[commit].sha;
    const treeUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/${commitSha}`;

    // Fetch the tree (recursive to get all files and folders)
    const treeResponse = await fetch(treeUrl);
    const treeData = await treeResponse.json();
    console.log(treeData, "treeData");
    // Extract folders and files from the tree
    const foldersAndFiles = treeData.tree;
    // .map((item) => ({
    //   item: item,
    // }));
    // console.log(foldersAndFiles);
    return foldersAndFiles;
    // return foldersAndFiles;
  } catch (error) {
    console.error("Error fetching folders and files:", error);
    return null;
  }
};

// {
//     sha: '5d1c985e61cb8192178b4d7f0430ee76c58d130b',
//     node_id: 'C_kwDOMP-G_9oAKDVkMWM5ODVlNjFjYjgxOTIxNzhiNGQ3ZjA0MzBlZTc2YzU4ZDEzMGI',
//     commit: {
//       author: {
//         name: 'MohammadAbdin',
//         email: 'mohamad-abdeen333@hotmail.com',
//         date: '2024-07-01T10:21:34Z'
//       },
//       committer: {
//         name: 'MohammadAbdin',
//         email: 'mohamad-abdeen333@hotmail.com',
//         date: '2024-07-01T10:21:34Z'
//       },
//       message: 'editing project schema',
//       tree: {
//         sha: 'fba9b5fadb69820d6aef5c1e4ea7a765dac25b42',
//         url: 'https://api.github.com/repos/mohammadAbdin/RevOps/git/trees/fba9b5fadb69820d6aef5c1e4ea7a765dac25b42'
//       },
//       url: 'https://api.github.com/repos/mohammadAbdin/RevOps/git/commits/5d1c985e61cb8192178b4d7f0430ee76c58d130b',
//       comment_count: 0,
//       verification: {
//         verified: false,
//         reason: 'unsigned',
//         signature: null,
//         payload: null
//       }
//     },
//     url: 'https://api.github.com/repos/mohammadAbdin/RevOps/commits/5d1c985e61cb8192178b4d7f0430ee76c58d130b',
//     html_url: 'https://github.com/mohammadAbdin/RevOps/commit/5d1c985e61cb8192178b4d7f0430ee76c58d130b',
//     comments_url: 'https://api.github.com/repos/mohammadAbdin/RevOps/commits/5d1c985e61cb8192178b4d7f0430ee76c58d130b/comments',
//     author: {
//       login: 'mohammadAbdin',
//       id: 100132908,
//       node_id: 'U_kgDOBffoLA',
//       avatar_url: 'https://avatars.githubusercontent.com/u/100132908?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/mohammadAbdin',
//       html_url: 'https://github.com/mohammadAbdin',
//       followers_url: 'https://api.github.com/users/mohammadAbdin/followers',
//       following_url: 'https://api.github.com/users/mohammadAbdin/following{/other_user}',
//       gists_url: 'https://api.github.com/users/mohammadAbdin/gists{/gist_id}',
//       starred_url: 'https://api.github.com/users/mohammadAbdin/starred{/owner}{/repo}',
//       subscriptions_url: 'https://api.github.com/users/mohammadAbdin/subscriptions',
//       organizations_url: 'https://api.github.com/users/mohammadAbdin/orgs',
//       repos_url: 'https://api.github.com/users/mohammadAbdin/repos',
//       events_url: 'https://api.github.com/users/mohammadAbdin/events{/privacy}',
//       received_events_url: 'https://api.github.com/users/mohammadAbdin/received_events',
//       type: 'User',
//       site_admin: false
//     },
//     committer: {
//       login: 'mohammadAbdin',
//       id: 100132908,
//       node_id: 'U_kgDOBffoLA',
//       avatar_url: 'https://avatars.githubusercontent.com/u/100132908?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/mohammadAbdin',
//       html_url: 'https://github.com/mohammadAbdin',
//       followers_url: 'https://api.github.com/users/mohammadAbdin/followers',
//       following_url: 'https://api.github.com/users/mohammadAbdin/following{/other_user}',
//       gists_url: 'https://api.github.com/users/mohammadAbdin/gists{/gist_id}',
//       starred_url: 'https://api.github.com/users/mohammadAbdin/starred{/owner}{/repo}',
//       subscriptions_url: 'https://api.github.com/users/mohammadAbdin/subscriptions',
//       organizations_url: 'https://api.github.com/users/mohammadAbdin/orgs',
//       repos_url: 'https://api.github.com/users/mohammadAbdin/repos',
//       events_url: 'https://api.github.com/users/mohammadAbdin/events{/privacy}',
//       received_events_url: 'https://api.github.com/users/mohammadAbdin/received_events',
//       type: 'User',
//       site_admin: false
//     },
//     parents: [
//       {
//         sha: '0cf3a153f9d8346cc4854ccb10744b858ffb8182',
//         url: 'https://api.github.com/repos/mohammadAbdin/RevOps/commits/0cf3a153f9d8346cc4854ccb10744b858ffb8182',
//         html_url: 'https://github.com/mohammadAbdin/RevOps/commit/0cf3a153f9d8346cc4854ccb10744b858ffb8182'
//       }
//     ]
//   }

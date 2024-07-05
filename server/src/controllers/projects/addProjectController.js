import Project from "../../models/projectModel.js";
import { getCommitIndex } from "../../logic/getCommitIndex.js";
export const addProject = async (req, res) => {
  const { project_title, githubUri, tags, projectStatus, _id, description } =
    req.body;
  const commitIndex = await getCommitIndex(githubUri);
  const userId = _id;
  const views = 0;
  console.log(tags);
  try {
    const newProject = new Project({
      project_title,
      githubUri,
      description,
      tags,
      projectStatus,
      userId,
      commitIndex,
      views,
    });

    await newProject.save();
    res
      .status(201)
      .json({ message: "User created successfully", myres: newProject });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

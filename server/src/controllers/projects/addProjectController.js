import Project from "../../models/projectModel.js";
import { getCommitIndex } from "../../logic/getCommitIndex.js";
export const addProject = async (req, res) => {
  const { project_title, githubUri, tags, projectStatus, _id, description } =
    req.body;
  console.log(req.body);
  const commitIndex = await getCommitIndex(githubUri);
  console.log("commitIndex", commitIndex);
  const userId = _id;
  try {
    const newProject = new Project({
      project_title,
      githubUri,
      description,
      tags,
      projectStatus,
      userId,
      commitIndex,
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

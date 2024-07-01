import Project from "../../models/projectModel.js"; // it must be changed
// import { getGithubUrls } from "../../logic/getGithubUrls.js";
export const addProject = async (req, res) => {
  const { project_title, githubUri, tags, projectStatus, _id } = req.body;
  console.log(tags, projectStatus, _id, project_title);
  // console.log(req.body);
  // getGithubUrls(githubUri);
  const userId = _id;
  try {
    const newProject = new Project({
      project_title,
      githubUri,
      tags,
      projectStatus,
      userId,
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

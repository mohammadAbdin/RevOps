import Project from "../../models/projectModel.js";

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    console.log(projects);
    if (!projects.length) {
      return res.status(404).json({ message: "No projects found." });
    }

    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

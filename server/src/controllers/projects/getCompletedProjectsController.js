import Project from "../../models/projectModel.js";

export const getCompletedProjects = async (req, res) => {
  try {
    const projects = await Project.find({ projectStatus: "Completed" });
    if (!projects.length) {
      return res.status(404).json({ message: "No completed projects found." });
    }

    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

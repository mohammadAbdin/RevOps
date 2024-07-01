import Project from "../../models/projectModel.js";

export const getProjectsToDo = async (req, res) => {
  try {
    const projects = await Project.find({ projectStatus: "pending" });
    console.log(projects);
    if (!projects.length) {
      return res.status(404).json({ message: "No pending projects found." });
    }

    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching pending projects:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

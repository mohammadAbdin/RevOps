import Project from "../../models/projectModel.js";

export const getProjectsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const projects = await Project.find({ userId });
    console.log(projects);
    if (!projects.length) {
      return res
        .status(404)
        .json({ message: "No projects found for this user." });
    }

    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

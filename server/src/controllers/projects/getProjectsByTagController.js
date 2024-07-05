import Project from "../../models/projectModel.js";

export const getProjectsByTag = async (req, res) => {
  const { tag } = req.query;
  try {
    // Fetch projects that contain the specified tag in their tags array
    console.log(tag);
    const projects = await Project.find({ tags: { $in: [tag] } });

    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects by tag:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

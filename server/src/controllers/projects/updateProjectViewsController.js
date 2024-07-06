import Project from "../../models/projectModel.js";

export const updateProjectViews = async (req, res) => {
  const projectId = req.params._id;

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      { $inc: { views: 1 } },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(updatedProject);
  } catch (error) {
    console.error("Error updating project views:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

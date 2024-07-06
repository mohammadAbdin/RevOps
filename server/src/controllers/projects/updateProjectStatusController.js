import Project from "../../models/projectModel.js";

export const updateProjectStatus = async (req, res) => {
  const projectId = req.params._id;

  try {
    const updatedProject = await Project.findOneAndUpdate(
      { _id: projectId },
      { projectStatus: "Review in progress" },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }

    return res.status(200).json(updatedProject);
  } catch (error) {
    console.error("Error updating project status:", error.message);
    return res.status(500).json({ error: "Server error" });
  }
};

import Project from "../../models/projectModel.js";

export const addFeedBackAndEdits = async (req, res) => {
  const { fileName, adminContent, feedBack, projectId } = req.body;
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const existingFeedBack = project.feedBack.find(
      (fb) => fb.fileName === fileName
    );

    if (existingFeedBack) {
      // Update the existing feedback entry
      existingFeedBack.adminContent = adminContent;
      existingFeedBack.feedBack = feedBack;
    } else {
      // Add new feedback entry
      project.feedBack.push({ fileName, adminContent, feedBack });
    }

    // Save the updated project
    await project.save();

    console.log(
      `Feedback ${
        existingFeedBack ? "updated" : "added"
      } for project with ID: ${projectId}`
    );
    res.status(200).json(project);
  } catch (error) {
    console.error("Error adding feedback:", error);
    res.status(500).json({ message: "Failed to add feedback" });
  }
};

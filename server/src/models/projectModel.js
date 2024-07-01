import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  project_title: { type: String, required: true },
  githubUri: { type: String, required: true },
  tags: { type: [String], required: true },
  projectStatus: { type: String, required: true },
  userId: { type: String, required: true },
  // githubUriStructure: { type: String, required: true },
});

const Project = mongoose.model("Project", projectSchema);

export default Project;

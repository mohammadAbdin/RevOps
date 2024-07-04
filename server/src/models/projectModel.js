import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  project_title: { type: String, required: true },
  githubUri: { type: String, required: true },
  tags: { type: [String], required: true },
  projectStatus: { type: String, required: true },
  description: { type: String, required: true },
  userId: { type: String, required: true },
  commitIndex: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  feedBack: [
    {
      fileName: { type: String },
      adminContent: [String],
      feedBack: { type: String },
    },
  ],
});

const Project = mongoose.model("Project", projectSchema);

export default Project;

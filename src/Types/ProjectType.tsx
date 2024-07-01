export default interface ProjectType {
  project_title: string;
  githubUri: string;
  description: string;
  tags: string[];
  projectStatus: string;
  _id: string | undefined;
}

// interface ProjectType {
//   _id: string;
//   project_title: string;
//   githubUri: string;
//   description: string;
//   tags: string;
//   projectStatus: boolean;
// }

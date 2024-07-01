export default interface ProjectType {
  project_title: string;
  githubUri: string;
  description: string;
  tags: string[];
  projectStatus: string;
  _id: string | undefined;
  userId?: string;
  commitIndex?: number;
  date?: Date;
  __v?: number;
}

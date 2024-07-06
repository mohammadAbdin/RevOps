export interface UserProjectProps {
  _id?: string;
  commitIndex?: number;
  date?: Date;
  githubUri: string;
  projectStatus: string;
  userId?: string;
  project_title: string;
  description: string;
  tags: string[];
  isAdmin: boolean;
  views?: number;
}

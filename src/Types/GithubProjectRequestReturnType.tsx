import ProjectType from "./ProjectType";
export interface FolderOrFile {
  path: string;
  type: "blob" | "tree";
  sha: string;
  size: number;
  url: string;
}

export interface GitHubProjectResponse {
  project: ProjectType;
  foldersAndFiles: FolderOrFile[];
}

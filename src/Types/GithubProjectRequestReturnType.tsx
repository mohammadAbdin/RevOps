import ProjectType from "./ProjectType";
export interface FolderOrFile {
  path: string;
  type: "blob" | "tree"; // blob for files, tree for folders
  sha: string;
  size: number; // size in bytes, valid only for files (blobs)
  url: string;
}

export interface GitHubProjectResponse {
  project: ProjectType;
  foldersAndFiles: FolderOrFile[];
}

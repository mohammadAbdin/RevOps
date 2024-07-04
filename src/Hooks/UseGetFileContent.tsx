import { useState } from "react";
import { getFileContentRequest } from "../API/getFileContentRequest";
interface UseReviewProjectsForAdminReturn {
  getFileContent: (url: string) => Promise<string | undefined>;
  fileContent: string | null;
  file: any;
}

const useGetFileContent = (): UseReviewProjectsForAdminReturn => {
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [file, setFile] = useState<any>(null);

  const getFileContent = async (url?: string) => {
    try {
      const response: any | null = await getFileContentRequest(url);
      console.log("getFileContentRequest", response);
      setFile(response);
      setFileContent(response.content);

      return;
    } catch (error) {
      console.error("Error fetching projects to do:", error);
      setFileContent(null);
    }
    return undefined;
  };

  return {
    getFileContent,
    fileContent,
    file,
  };
};

export default useGetFileContent;

import { useState } from "react";
import { getFileContentRequest } from "../API/getFileContentRequest";
interface UseReviewProjectsForAdminReturn {
  getFileContent: (url: string) => Promise<string | undefined>;
  fileContent: string | null;
}

const useGetFileContent = (): UseReviewProjectsForAdminReturn => {
  const [fileContent, setFileContent] = useState<string | null>(null);

  const getFileContent = async (url?: string) => {
    try {
      const response: string | null = await getFileContentRequest(url);
      console.log("getFileContentRequest", response);
      setFileContent(response);
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
  };
};

export default useGetFileContent;

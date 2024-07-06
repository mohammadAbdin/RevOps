import { useState } from "react";
import { getFileContentRequest } from "../API/getFileContentRequest";
interface UseReviewProjectsForAdminReturn {
  getFileContent: (url: string) => Promise<string | undefined>;
  fileContent: string | undefined;
  file: { content: string } | null;
}

const useGetFileContent = (): UseReviewProjectsForAdminReturn => {
  const [fileContent, setFileContent] = useState<string | undefined>();
  const [file, setFile] = useState<{ content: string } | null>(null);

  const getFileContent = async (url?: string) => {
    try {
      const response: { content: string } | null = await getFileContentRequest(
        url
      );
      setFile(response);
      setFileContent(response?.content);

      return;
    } catch (error) {
      console.error("Error fetching projects to do:", error);
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

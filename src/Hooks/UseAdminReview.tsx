import { AdminContentType } from "../Pages/Admin/displayFile/DisplayFile";
import { addFeedBackAndEditsRequest } from "../API/addFeedBackAndEditsRequest";
import { Dispatch, SetStateAction } from "react";
import extractFileNameFromUrl from "../Functions/extractFileNameFromUrl";
import { useState } from "react";
interface UseAdminReviewReturn {
  handleSubmitReview: (
    url: string,
    adminContent: AdminContentType | undefined,
    feedBack: string,
    projectId: string
  ) => void;
  adminEdits: string[];
  setAdminEdits: Dispatch<SetStateAction<string[]>>;
}

const useAdminReview = (): UseAdminReviewReturn => {
  const [adminEdits, setAdminEdits]: [
    string[],
    Dispatch<SetStateAction<string[]>>
  ] = useState<string[]>([]);
  const handleSubmitReview = async (
    url: string,
    adminContent: AdminContentType | undefined,
    feedBack: string,
    projectId: string
  ) => {
    await addFeedBackAndEditsRequest(
      extractFileNameFromUrl(url),
      adminContent,
      feedBack,
      projectId
    );
  };

  return {
    handleSubmitReview,
    adminEdits,
    setAdminEdits,
  };
};

export default useAdminReview;

import { FeedBackType } from "../Types/FeedBackType";
import { AdminContentType } from "../Pages/Admin/displayFile/DisplayFile";
const distructuringFeedBack = (
  feedBack: FeedBackType[],
  fileName: string,
  setAdminContent: React.Dispatch<
    React.SetStateAction<AdminContentType | undefined>
  >,
  setFeedBackInput: React.Dispatch<React.SetStateAction<string>>
) => {
  if (feedBack != undefined) {
    const matchedFeedback = feedBack.find(
      (fb: FeedBackType) => fb.fileName === fileName
    );
    if (matchedFeedback) {
      setAdminContent(matchedFeedback.adminContent);
      setFeedBackInput(matchedFeedback.feedBack);
    } else {
      console.log("No matching feedback found for fileName:", fileName);
    }
  }
};

export default distructuringFeedBack;

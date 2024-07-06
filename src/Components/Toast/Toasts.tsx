import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToastSuccessMessage = (msg: string) => {
  toast.success(msg, {
    position: "top-center",
    autoClose: 3000,
    className: "mt-10 z-50",
  });
};
export const showToastInfoMessage = (msg: string) => {
  toast.info(msg, {
    position: "top-center",
    autoClose: 3000,
    className: "mt-10",
  });
};
export const deleteProjectToast = () => {
  toast.success("Project deleted successfully", {
    position: "top-center",
  });
};

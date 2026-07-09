import { toast } from "react-toastify";
import Icon from "@/components/icons/Icons";

export function toastError(message: string) {
   toast.error(message, {
      className: "text-black!",
      icon: (
         <Icon
            iconName="errorToast"
            className="fill-red-600 whitespace-pre-line!"
         />
      ),
   });
}

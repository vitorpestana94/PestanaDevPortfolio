import { toast } from "react-toastify";
import Icon from "@/components/icons/Icons";

export function toastError(message: string) {
   toast.error(message, {
      className: "text-black! text-[0.875rem]!",
      icon: (
         <Icon
            iconName="errorToast"
            className="fill-red-600 whitespace-pre-line!"
         />
      ),
   });
}

export function toastLoading(message: string){
   toast.loading(message, {
      style: {
         backgroundColor: "#38b6ff",
         color: "#ffff",
      },
   });
}

export function toastDimiss(){
   toast.dismiss();
}
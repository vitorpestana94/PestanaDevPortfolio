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

export function toastSuccess(message: string) {
   toast.success(message, {
      className: "text-[0.875rem]!",
      style: {
         backgroundColor: "#38b6ff",
         color: "#ffff",
      },
      icon: (
         <Icon
            iconName="check"
            className="aspect-square w-6 min-w-6 stroke-white"
         />
      ),
   });
}

export function toastInfo(message: string) {
   toast.info(message, {
      style: {
         backgroundColor: "#38b6ff",
         color: "#ffff",
      },
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
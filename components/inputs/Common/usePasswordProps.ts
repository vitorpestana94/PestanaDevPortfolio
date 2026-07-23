import { useState } from "react";
import { useTranslations } from "next-intl";
import { IconName } from "@/components/icons/Icons";
import { toastError } from "@/utils/errors/toastHandlers";
import { PasswordInputType } from "../PasswordInput/PasswordInputInterface";

export default function usePasswordProps(type: PasswordInputType) {
   const t = useTranslations();
   const eyeOn: IconName = "eyeOn";
   const [eye, setEye] = useState<IconName>(eyeOn);
   const copyPasteErrorMessages: { [key in PasswordInputType]: string } = {
      password: t("error.password.password"),
      newPassword: t("error.password.newPassword"),
      passwordConfirmation: t("error.password.confirmPassword"),
      currentPassword: t("error.password.password")
   };

   function switchEye() {
      setEye(eye === eyeOn ? "eyeOff" : eyeOn);
   }

   function getCopyPasteError(){
      return `${t("error.password.copyPasting")}${copyPasteErrorMessages[type] ?? t("error.password.password")}`
   }

   const blockCopyOrPaste = (event: React.ClipboardEvent<HTMLInputElement>, isRepeatPassword?: boolean) => {
      event.preventDefault();

      toastError(getCopyPasteError())
   }

   return { t, eye, eyeOn, switchEye, blockCopyOrPaste };
}

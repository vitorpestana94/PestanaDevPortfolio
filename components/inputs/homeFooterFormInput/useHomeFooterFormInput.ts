import isEmailValid from "@/utils/strings/verifyEmailFormat";
import { useTranslations } from "next-intl";

export default function useHomeFooterFormInput() {
   const t = useTranslations();

   function verifyEmail(value: any) {
      return isEmailValid(value) || t("auth.login.form.errors.emailFormat");
   }

   function verifyName(value: any) {
      return value ? true : t("home.quartaSessao.form.errors.name");
   }

   return {
      t,
      emailRequired: t("auth.login.form.errors.email"),
      nameRequired: t("home.quartaSessao.form.errors.name"),
      verifyEmail,
      verifyName,
   };
}

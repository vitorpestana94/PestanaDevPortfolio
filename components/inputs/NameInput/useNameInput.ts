import { useTranslations } from "next-intl";

export default function useNameInput() {
   const t = useTranslations("auth.sign-up.form.thirdStep");

   return {
      errorMessage: t("error.name"),
      placeHolder: t("placeholders.name"),
   };
}

import { useTranslations } from "next-intl";

export default function useForgotPasswordThirdStep() {
   const t = useTranslations("auth.forgot-password.form.thirdStep");

   return { t };
}

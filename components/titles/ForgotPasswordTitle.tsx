import { useTranslations } from "next-intl";

export default function ForgotPasswordTitle() {
   const t = useTranslations();

   return (
      <h1 className="authFormTitle">{t("auth.forgot-password.form.title")}</h1>
   );
}

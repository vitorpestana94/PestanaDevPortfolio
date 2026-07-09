import { useTranslations } from "next-intl";

export default function SignUpTitle() {
   const t = useTranslations();

   return <h1 className="authFormTitle">{t("auth.sign-up.form.title")}</h1>;
}

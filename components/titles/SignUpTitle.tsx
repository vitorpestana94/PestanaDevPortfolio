import { useTranslations } from "next-intl";

export default function SignUpTitle() {
  const t = useTranslations();

  return <h1 className="authFormTitle">{t("auth.signUp.form.title")}</h1>;
}

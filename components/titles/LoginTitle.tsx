import { useTranslations } from "next-intl";

export default function LoginTitle() {
  const t = useTranslations();

  return <h1 className="authFormTitle mt-5">{t("auth.login.form.title")}</h1>;
}

import { useTranslations } from "next-intl";

export default function LoginTitle() {
  const t = useTranslations();
  return (
    <h1 className="text-black text-[1.5rem]">{t("auth.login.form.title")}</h1>
  );
}

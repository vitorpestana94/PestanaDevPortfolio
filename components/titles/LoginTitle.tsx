import { useTranslations } from "next-intl";

export default function LoginTitle() {
  const t = useTranslations();

  return (
    <h1 className="text-black font-semibold text-[1.5rem] sm:text-[1.75rem]">
      {t("auth.login.form.title")}
    </h1>
  );
}

import { useTranslations } from "next-intl";

export default function LoginTitle() {
  const t = useTranslations();

  return (
    <h1 className="text-black font-semibold  text-[1.5rem] sm:text-[1.75rem] xl:text-[1.875rem] 3xl:text-[2.125rem] mt-5">
      {t("auth.login.form.title")}
    </h1>
  );
}

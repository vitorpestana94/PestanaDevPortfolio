import { useTranslations } from "next-intl";

export default function SignUpTitle() {
  const t = useTranslations();

  return (
    <h1 className="text-black font-semibold text-[1.5rem] sm:text-[1.75rem]">
      {t("auth.signUp.form.title")}
    </h1>
  );
}

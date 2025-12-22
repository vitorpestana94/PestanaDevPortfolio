import { useTranslations } from "next-intl";

export default function CopyrightParagraph() {
  const t = useTranslations("home");

  return (
    <p className="text-white opacity-40 text-[0.625rem] pt-6 sm:pt-0 sm:ml-8">
      © {new Date().getFullYear()} - Copyright Vitor Pestana.
      {t("quartaSessao.copyright")}
    </p>
  );
}

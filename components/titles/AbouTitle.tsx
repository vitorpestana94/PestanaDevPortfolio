import { useTranslations } from "next-intl";

export default function AbouTitle() {
  const t = useTranslations("home.segundaSessao");

  return (
    <h2 className="azulPestana text-[2rem] sm:text-[2.5rem] xl:text-[3.75rem] text-start whitespace-pre-line leading-[1.1]">
      {t("titulo")}
    </h2>
  );
}

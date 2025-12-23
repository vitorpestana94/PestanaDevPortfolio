import { useTranslations } from "next-intl";
import HomeTitle from "./HomeTitle";

export default function MyWork() {
  const t = useTranslations("home.terceiraSessao");

  return (
    <HomeTitle>
      <h2 className="azulPestana homeSubTitle">{t("titulo")}</h2>
    </HomeTitle>
  );
}

import { useTranslations } from "next-intl";
import HomeTitle from "./HomeTitle";

export default function AbouTitle() {
  const t = useTranslations("home.segundaSessao");

  return (
    <HomeTitle>
      <h2 className="azulPestana homeSubTitle">{t("titulo")}</h2>
    </HomeTitle>
  );
}

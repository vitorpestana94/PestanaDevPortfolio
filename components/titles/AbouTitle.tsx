import { useTranslations } from "next-intl";
import HomeTitle from "./HomeTitle";

export default function AbouTitle({}: {}) {
   const t = useTranslations("home");

   return (
      <HomeTitle>
         <h2 className="azulPestana homeSubTitle">{t("segundaSessao.titulo")}</h2>
         <p className="subTitleParagraph">{t("primeiraSessao.about")}</p>
      </HomeTitle>
   );
}

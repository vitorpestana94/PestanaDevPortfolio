import { useTranslations } from "next-intl";
import HomeTitle from "./HomeTitle";

export default function MyValuesTitle({}: {}) {
   const t = useTranslations("home.segundaSessao.tituloValores");

   return (
      <HomeTitle>
         <h2 className="azulPestana homeSubTitle">{t("titulo")}</h2>
         <p className="subTitleParagraph">{t("subTitulo")}</p>
      </HomeTitle>
   );
}

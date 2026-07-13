import { useTranslations } from "next-intl";
import HomeTitle from "./HomeTitle";

export default function MySkills() {
   const t = useTranslations("home.quartaSessao");

   return (
      <HomeTitle>
         <h2 className="azulPestana homeSubTitle">{t("titulo")}</h2>
      </HomeTitle>
   );
}

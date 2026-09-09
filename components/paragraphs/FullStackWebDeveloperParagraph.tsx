import { useTranslations } from "next-intl";

export default function FullStackWebDeveloperParagraph() {
   const t = useTranslations("home.primeiraSessao");

   return (
      <h1
         className="text-[#898989] text-nowrap font-medium text-[0.5rem] lg:text-[1rem] font-abril"
      >
         {t("about")}
      </h1>
   );
}

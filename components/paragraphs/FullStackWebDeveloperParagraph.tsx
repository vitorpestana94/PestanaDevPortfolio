import { useTranslations } from "next-intl";

export default function FullStackWebDeveloperParagraph() {
   const t = useTranslations("home.primeiraSessao");

   return (
      <h1
         className="text-gray-400 text-nowrap font-medium text-[0.5rem] sm:text-xs lg:text-[1rem]"
      >
         {t("about")}
      </h1>
   );
}

import { useTranslations } from "next-intl";

export default function FullStackWebDeveloperParagraph() {
   const t = useTranslations("home.primeiraSessao");

   return (
      <h1
         className="text-[#93c5fd] text-nowrap font-medium text-[0.5rem] lg:text-[1rem]"
      >
         {t("about")}
      </h1>
   );
}

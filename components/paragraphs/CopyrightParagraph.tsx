import { useTranslations } from "next-intl";

export default function CopyrightParagraph() {
   const t = useTranslations("home");

   return (
      <p className="termsCopyPrivacyParagraph pt-6 xl:pt-0 xl:ml-8">
         {`© ${new Date().getFullYear()} - Copyright Vitor Pestana. ${t("ultimaSessao.copyright")}`}
      </p>
   );
}

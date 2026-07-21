import { useTranslations } from "next-intl";

export default function CopyrightParagraph() {
   const t = useTranslations("home");

   return (
      <p className="termsCopyPrivacyParagraph pt-6 sm:pt-0 sm:ml-8">
         {`© ${new Date().getFullYear()} - Copyright Vitor Pestana. ${t("ultimaSessao.copyright")}`}
      </p>
   );
}

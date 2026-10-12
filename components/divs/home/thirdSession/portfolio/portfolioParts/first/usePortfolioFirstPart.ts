import useIsMobile from "@/hooks/useIsMobile";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function usePortfolioFirstPart() {
   const t = useTranslations("home.terceiraSessao.imgs");
   const locale = useLocale();
   const { isMobile } = useIsMobile();

   return {
      isMobile,
      t,
      locale,
      imgText: {
         magiPass: t("magiPass"),
         saideira: t("saideira"),
      },
   };
}

import useIsMobile from "@/hooks/useIsMobile";
import { useTranslations } from "next-intl";

export default function usePortfolioFirstPart() {
   const t = useTranslations("home.terceiraSessao.imgs");
   const { isMobile } = useIsMobile();

   return {
      isMobile,
      imgText: {
         magiPass: t("magiPass"),
         saideira: t("saideira"),
      },
   };
}

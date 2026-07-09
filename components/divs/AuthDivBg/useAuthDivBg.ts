import { useTranslations } from "next-intl";
import useSubRoute from "@/hooks/useSubRoute";

export default function useAuthDivBg() {
   const { subRoute } = useSubRoute();
   const t = useTranslations();

   return { flow: subRoute ?? "profile", t };
}

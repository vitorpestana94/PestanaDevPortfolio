import { useTranslations } from "next-intl";
import GenericHr from "./GenericHr";

export default function LoginHr() {
   const t = useTranslations("auth.common");

   return <GenericHr text={t("or")} />;
}

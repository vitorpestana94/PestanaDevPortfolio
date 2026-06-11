import { useTranslations } from "next-intl";

export default function useEditProfileThirdStep() {
   const t = useTranslations("profile");

   return { t };
}

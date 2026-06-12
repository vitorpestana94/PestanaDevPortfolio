import options from "../../../data/options.json";
import DivBg from "../DivBg/DivBg";
import { useTranslations } from "next-intl";
import { FormType } from "@/components/sections/profile/useProfileSection";

export default function ProfileDivBg({ formType }: { formType: FormType }) {
   const t = useTranslations("profile.banner");

   return (
      <DivBg
         bgUrl={options.backgroundImages.authBanner}
         text={{
            title: t(`${formType}.title`),
            paragraph: t(`${formType}.paragraph`),
         }}
      />
   );
}

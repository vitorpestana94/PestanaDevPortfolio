import Link from "next/link";
import Icon from "../icons/Icons";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function EditProfileButton() {
   const locale = useLocale();
   const t = useTranslations("home.header");

   return (
      <Link
         href={`${locale}/user/profile`}
         className="flex gap-x-2 items-center w-full"
      >
         <Icon
            iconName="profile"
            className="aspect-square w-4.5 stroke-[#3D3D3D]"
         />
         <p className="text-[#3D3D3D] text-start text-[0.625rem]">
            {t("profile.editProfile")}
         </p>
      </Link>
   );
}

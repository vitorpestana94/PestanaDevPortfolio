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
         className="flex gap-x-2 justify-center items-center w-full hover:bg-white/10 py-2 group"
      >
         <Icon
            iconName="profile"
            className="aspect-square w-4.5 stroke-[#bfbfbf] group-hover:stroke-[#38b6ff]"
         />
         <p className="text-[#bfbfbf] text-start text-[0.625rem] group-hover:text-[#38b6ff]">
            {t("profile.editProfile")}
         </p>
      </Link>
   );
}

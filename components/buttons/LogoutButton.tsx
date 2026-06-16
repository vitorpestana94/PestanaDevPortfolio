import { signOut } from "next-auth/react";
import Icon from "../icons/Icons";
import { useTranslations } from "next-intl";

export default function LogoutButton() {
   const t = useTranslations("home.header");

   return (
      <button
         className="flex gap-x-2 self-center items-center cursor-pointer"
         type="button"
         onClick={() => signOut()}
      >
         <Icon
            iconName="logout"
            className="aspect-square w-4.5 stroke-[#bfbfbf]"
         />
         <p className="text-[0.625rem] text-[#bfbfbf]">
            {t("profile.loggout")}
         </p>
      </button>
   );
}

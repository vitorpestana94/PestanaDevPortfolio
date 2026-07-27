import Icon from "../icons/Icons";
import { useTranslations } from "next-intl";
import { logout } from "@/utils/authentication/logout";

export default function LogoutButton() {
   const t = useTranslations("home.header");

   return (
      <button
         className="flex gap-x-2 justify-center items-center cursor-pointer w-full py-2.5 hover:bg-white/10 group"
         type="button"
         onClick={() => logout()}
      >
         <Icon
            iconName="logout"
            className="aspect-square w-4.5 stroke-[#bfbfbf] group-hover:stroke-[#38b6ff]"
         />
         <p className="text-[0.625rem] text-[#bfbfbf] group-hover:text-[#38b6ff]">
            {t("profile.loggout")}
         </p>
      </button>
   );
}

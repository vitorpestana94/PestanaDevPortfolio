"use client";

import { Link } from "@/i18n/routing";
import useSiteNavigationSpan from "./useSiteNavigationSpan";
import UserButton from "@/components/buttons/userButton/UserButton";

export default function SiteNavigationSpan() {
   const { t, isUserLogged, userData } = useSiteNavigationSpan();

   return (
      <span
         className="flex flex-col items-center text-[#bfbfbf] z-50
        text-[1rem] gap-y-5 
        sm:gap-x-4.5 sm:flex-row sm:gap-y-0
        md:gap-x-5
        lg:gap-x-6
        xl:gap-x-8 
        4xl:text-[1.125rem] 4xl:gap-x-10"
      >
         <Link className="hoverPestana" href={"#sobre"}>
            {t("sobre")}
         </Link>
         <Link className="hoverPestana" href={"#meuTrabalho"}>
            {t("meuTrabalho")}
         </Link>
         <Link className="hoverPestana" href={"#minhasHabilidades"}>
            {t("mySkills")}
         </Link>
         {isUserLogged ? (
            <UserButton user={userData.user} />
         ) : (
            <Link className="hoverPestana" href={"/authentication/login"}>
               {t("logar")}
            </Link>
         )}
      </span>
   );
}

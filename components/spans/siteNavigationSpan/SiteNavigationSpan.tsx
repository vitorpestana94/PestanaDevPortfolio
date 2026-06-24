"use client";

import Link from "next/link";
import useSiteNavigationSpan from "./useSiteNavigationSpan";
import UserButton from "@/components/buttons/userButton/UserButton";

export default function SiteNavigationSpan() {
   const { t, path, isUserLogged, userData } = useSiteNavigationSpan();

   return (
      <span
         className="flex flex-col items-center text-[#bfbfbf]
        text-[1.125rem] gap-y-4
        md:flex-row md:gap-x-4 md:gap-y-0
        xl:text-[1.375rem] xl:gap-x-5
        3xl:text-[1.625rem] 3xl:gap-x-8
        4xl:text-[2rem] 4xl:gap-x-10"
      >
         <Link className="hoverPestana" href={"#sobre"}>
            {t("sobre")}
         </Link>
         <Link className="hoverPestana" href={"#meuTrabalho"}>
            {t("meuTrabalho")}
         </Link>
         {isUserLogged ? (
            <UserButton user={userData.user} />
         ) : (
            <Link className="hoverPestana" href={path}>
               {t("logar")}
            </Link>
         )}
      </span>
   );
}

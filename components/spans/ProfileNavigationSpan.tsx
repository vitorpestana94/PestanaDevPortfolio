"use client";

import { Link } from "@/i18n/routing";
import Icon, { IconName } from "../icons/Icons";
import useButtonMotionEffects from "@/hooks/useButtonMotionEffects";
import { motion } from "motion/react";
import useSubRoute from "@/hooks/useSubRoute";
import User from "@/models/interfaces/dtos/responses/GetUserResponseDto";

function NavBarButton({
   iconName,
   href,
}: {
   iconName: IconName;
   href: string;
}) {
   const { scale, transition } = useButtonMotionEffects();

   return (
      <motion.button
         type="button"
         whileTap={scale}
         whileHover={scale}
         transition={transition}
      >
         <Link href={href}>
            <Icon
               iconName={iconName}
               className="aspect-square w-4 sm:w-5 stroke-black hover:stroke-[#38b6ff] cursor-pointer"
            />
         </Link>
      </motion.button>
   );
}

export default function ProfileNavigationSpan({
   step,
   shouldRenderNav,
   user,
}: {
   step?: number;
   shouldRenderNav?: boolean;
   user: User;
}) {
   const { subRoute } = useSubRoute();
   const shouldRenderDeleteOrChangePassword = user.registerType === "Manual";
   const hrefPerButton = {
      profile: "/profile",
      edit: "/profile/edit",
      changePassword: "/profile/change-password",
      deleteAccount: "/profile/delete-account",
   };

   const shouldRenderButton = (href: string) => {
      const route = `/${subRoute === undefined ? "profile" : `profile/${subRoute}`}`;

      return href !== route;
   };

   return (
      <>
         {(step === 1 || shouldRenderNav) && (
            <span className="navSwitchPosition flex gap-x-3 lg:gap-x-4">
               {shouldRenderButton(hrefPerButton.profile) && (
                  <NavBarButton
                     iconName="profile"
                     href={hrefPerButton.profile}
                  />
               )}
               {shouldRenderButton(hrefPerButton.edit) && (
                  <NavBarButton iconName="pencil" href={hrefPerButton.edit} />
               )}
               {shouldRenderButton(hrefPerButton.changePassword) &&
                  shouldRenderDeleteOrChangePassword && (
                     <NavBarButton
                        iconName="lock"
                        href={hrefPerButton.changePassword}
                     />
                  )}
               {shouldRenderButton(hrefPerButton.deleteAccount) && (
                  <NavBarButton
                     iconName="trash"
                     href={hrefPerButton.deleteAccount}
                  />
               )}
            </span>
         )}
      </>
   );
}

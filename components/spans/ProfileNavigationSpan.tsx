import {
   FormType,
   show,
   credentials,
   edit,
   deleteAccount,
} from "../sections/profile/useProfileSection";
import Icon, { IconName } from "../icons/Icons";
import useButtonMotionEffects from "@/hooks/useButtonMotionEffects";
import { motion } from "motion/react";

function NavBarButton({
   iconName,
   onClick,
}: {
   iconName: IconName;
   onClick: () => void;
}) {
   const { scale, transition } = useButtonMotionEffects();

   return (
      <motion.button
         type="button"
         onClick={() => {
            onClick();
         }}
         whileTap={scale}
         whileHover={scale}
         transition={transition}
      >
         <Icon
            iconName={iconName}
            className="aspect-square w-4 sm:w-5 stroke-black hover:stroke-[#38b6ff] cursor-pointer"
         />
      </motion.button>
   );
}

export default function ProfileNavigationSpan({
   shoulShowChangePassword,
   switchFormType,
}: {
   shoulShowChangePassword: boolean;
   formType: FormType;
   switchFormType: (formType: FormType) => void;
}) {
   return (
      <span className="navSwitchPosition flex gap-x-3 lg:gap-x-4">
         <NavBarButton
            iconName="profile"
            onClick={() => {
               switchFormType(show);
            }}
         />
         <NavBarButton
            iconName="pencil"
            onClick={() => {
               switchFormType(edit);
            }}
         />
         {shoulShowChangePassword && (
            <NavBarButton
               iconName="lock"
               onClick={() => {
                  switchFormType(credentials);
               }}
            />
         )}
         <NavBarButton
            iconName="trash"
            onClick={() => {
               switchFormType(deleteAccount);
            }}
         />
      </span>
   );
}

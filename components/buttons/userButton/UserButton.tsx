"use client";

import UserDataInterface from "@/models/interfaces/UI/UserDataInterface";
import useUserButton from "./useUserButton";
import UserMenu from "@/components/spans/userMenuSpan/UserMenuSpan";
import ProviderProfilePicture from "@/components/icons/specificIcons/ProviderProfilePicture";
import UserProfilePicture from "@/components/icons/specificIcons/UserProfilePicture";

export default function UserButton({ user }: UserDataInterface) {
   const { showUserNav, openOrCloseMenu, openMenu, closeMenu } =
      useUserButton();

   return (
      <div className="flex flex-col justify-center items-center relative">
         <button
            type="button"
            onClick={() => {
               openOrCloseMenu();
            }}
            onMouseEnter={() => {
               openMenu();
            }}
            onMouseLeave={() => {
               closeMenu();
            }}
         >
            {user.img ? (
               <ProviderProfilePicture img={user.img} />
            ) : (
               <UserProfilePicture userName={user.name} />
            )}
         </button>
         {showUserNav && (
            <UserMenu user={user} openMenu={openMenu} closeMenu={closeMenu} />
         )}
      </div>
   );
}

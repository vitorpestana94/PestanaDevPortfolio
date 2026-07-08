"use client";

import UserDataInterface from "@/models/interfaces/UI/UserDataInterface";
// import Profile from "@/components/icons/Icons";
import useUserButton from "./useUserButton";
import Profile from "@/components/icons/specificIcons/profilePicture/Profile";
import UserMenu from "@/components/spans/userMenuSpan/UserMenuSpan";

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
            <Profile userName={user.name} />
         </button>
         {showUserNav && (
            <UserMenu user={user} openMenu={openMenu} closeMenu={closeMenu} />
         )}
      </div>
   );
}

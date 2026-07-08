"use client";

import UserDataInterface from "@/models/interfaces/UI/UserDataInterface";
import Profile from "@/components/icons/Icons";
import useUserButton from "./useUserButton";
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
            <Profile
               iconName="profileCircle"
               className="fill-[#bfbfbf] hover:fill-[#38b6ff] aspect-square w-8 lg:w-8.5 xl:w-9.5 3xl:w-10.5 cursor-pointer"
            />
         </button>
         {showUserNav && (
            <UserMenu user={user} openMenu={openMenu} closeMenu={closeMenu} />
         )}
      </div>
   );
}

"use client";

import UserDataInterface from "@/models/interfaces/UI/UserDataInterface";
import Profile from "@/components/icons/Icons";
import useUserButton from "./useUserButton";
import UserMenu from "@/components/spans/userMenuSpan/UserMenuSpan";

export default function UserButton({ user }: UserDataInterface) {
   const { showUserNav, openOrCloseMenu, openMenu, closeMenu } =
      useUserButton();

   return (
      <div className="flex flex-col justify-center items-center">
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
               className="fill-[#bfbfbf] hover:fill-[#38b6ff] aspect-square w-6 sm:w-7 md:w-8 xl:w-9 3xl:w-13 cursor-pointer"
            />
         </button>
         {true && <UserMenu user={user} />}
      </div>
   );
}

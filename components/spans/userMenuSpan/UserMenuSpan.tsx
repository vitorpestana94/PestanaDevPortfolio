"use client";

import Triangle from "./subComponents/MenuTriangle";
import UserDataDiv from "./subComponents/UserDataDiv";
import LogoutButton from "@/components/buttons/LogoutButton";
import EditProfile from "@/components/buttons/EditProfileButton";
import Interface from "./UserMenuSpanInterface";

export default function UserMenuSpan({ user, closeMenu, openMenu }: Interface) {
   return (
      <span
         className="bg-[#242424] relative border mt-2 border-black border-t-0 rounded-md flex flex-col items-center z-50
         lg:absolute lg:top-full lg:mt-1.5 lg:left-1/2 lg:-translate-x-1/2 lg:my-0"
         onMouseEnter={() => {
            openMenu();
         }}
         onMouseLeave={() => {
            closeMenu();
         }}
      >
         <Triangle />
         <UserDataDiv user={user} />
         <div className="flex flex-col justify-between items-center gap-y-5 pt-3 pb-3">
            <EditProfile />
            <LogoutButton />
         </div>
      </span>
   );
}

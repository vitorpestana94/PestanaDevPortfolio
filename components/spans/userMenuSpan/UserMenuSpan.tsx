"use client";

import UserDataInterface from "@/models/interfaces/UI/UserDataInterface";
import Triangle from "./subComponents/MenuTriangle";
import UserDataDiv from "./subComponents/UserDataDiv";
import LogoutButton from "@/components/buttons/LogoutButton";

export default function UserMenuSpan({ user }: UserDataInterface) {
   return (
      <>
         <Triangle />
         <span
            className="absolute top-12 bg-[#FAF9F6] w-1/2 right-4 aspect-1/1.5  rounded-md z-50 
         flex flex-col justify-between items-center"
         >
            <UserDataDiv user={user} />

            <LogoutButton />
         </span>
      </>
   );
}

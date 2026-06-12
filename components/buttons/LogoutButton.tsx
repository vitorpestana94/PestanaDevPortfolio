import { signOut } from "next-auth/react";
import Icon from "../icons/Icons";

export default function LogoutButton() {
   return (
      <button
         className="flex gap-x-2 justify-center items-center w-full py-1.5 cursor-pointer
         stroke-[#3D3D3D] text-[#3D3D3D]"
         type="button"
         onClick={() => signOut()}
      >
         <Icon iconName="logout" className="aspect-square w-4.5" />
         <p className="text-[0.625rem]">Loggout</p>
      </button>
   );
}

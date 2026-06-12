import { useState } from "react";

export default function useUserButton() {
   const [showUserNav, setShowUserNav] = useState<boolean>(false);

   function openOrCloseMenu() {
      setShowUserNav(!showUserNav);
   }

   function closeMenu() {
      setShowUserNav(false);
   }

   function openMenu() {
      setShowUserNav(true);
   }

   return { showUserNav, openOrCloseMenu, openMenu, closeMenu };
}

import useMobileNavigation from "./useMobileNavigation";
import Menu from "@/components/icons/specificIcons/Menu";
import MobileNav from "@/components/navs/mobileNav/MobileNavBar";

export default function MobileNavigation() {
   const { navRef, open, setOpen } = useMobileNavigation();

   return (
      <>
         <div className="absolute top-10 right-8 sm:top-8 sm:right-10 z-50">
            <Menu open={open} setOpen={setOpen} />
         </div>
         {open && <MobileNav ref={navRef} setOpen={setOpen} />}
      </>
   );
}

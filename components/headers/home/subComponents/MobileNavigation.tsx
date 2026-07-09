import useMobileNavigation from "./useMobileNavigation";
import Menu from "@/components/icons/specificIcons/Menu";
import MobileNav from "@/components/navs/mobileNav/MobileNavBar";

export default function MobileNavigation() {
   const { navRef, open, setOpen } = useMobileNavigation();

   return (
      <>
         <div className="absolute top-10 sm:top-15.5 right-8">
            <Menu open={open} setOpen={setOpen} />
         </div>
         {open && <MobileNav ref={navRef} setOpen={setOpen} />}
      </>
   );
}

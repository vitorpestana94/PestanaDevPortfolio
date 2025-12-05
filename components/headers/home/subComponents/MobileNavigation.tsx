import useMobileNavigation from "./useMobileNavigation";
import Menu from "@/components/icons/specificIcons/Menu";
import MobileNav from "@/components/navs/mobileNav/MobileNavBar";

export default function MobileNavigation() {
  const { navRef, open, setOpen } = useMobileNavigation();

  return (
    <div
      className={`absolute top-0 rounded-l-lg right-0 z-50 ${
        open ? "bg-[#06061F]" : "bg-none"
      }`}
    >
      <div className="relative h-full">
        <div className="absolute top-10 sm:top-[62px] right-6 z-20">
          <Menu open={open} setOpen={setOpen} />
        </div>
        {open && (
          <MobileNav
            props={{
              navRef: navRef,
              setOpen: setOpen,
            }}
          />
        )}
      </div>
    </div>
  );
}

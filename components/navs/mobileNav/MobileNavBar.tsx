import { forwardRef } from "react";
import SiteNavigation from "@/components/spans/SiteNavigationSpan";
import SocialMedias from "@/components/spans/SocialMediaSpan";
import X from "@/components/icons/specificIcons/xCross";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNavBar = forwardRef<HTMLElement, Props>(({ setOpen }, navRef) => {
  return (
    <nav
      ref={navRef}
      className="flex flex-col gap-y-10 py-10 text-white h-full px-8"
    >
      <X setOpen={setOpen} />
      <SiteNavigation />
      <SocialMedias />
    </nav>
  );
});

MobileNavBar.displayName = "MobileNavBar";

export default MobileNavBar;

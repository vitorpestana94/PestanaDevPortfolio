import { forwardRef } from "react";
import SiteNavigation from "@/components/spans/siteNavigationSpan/SiteNavigationSpan";
import SocialMedias from "@/components/spans/SocialMediaSpan";
import X from "@/components/icons/specificIcons/xCross";

type Props = {
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNavBar = forwardRef<HTMLElement, Props>(({ setOpen }, navRef) => {
   return (
      <nav
         ref={navRef}
         className="fixed bottom-0 left-1/2 -translate-x-1/2 flex flex-col gap-y-8 py-8 
         text-white bg-[#242424] z-50 w-full rounded-t-[50px]"
      >
         <X setOpen={setOpen} />
         <SiteNavigation />
         <SocialMedias />
      </nav>
   );
});

MobileNavBar.displayName = "MobileNavBar";

export default MobileNavBar;

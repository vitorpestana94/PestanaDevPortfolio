import SiteNavigation from "@/components/spans/SiteNavigationSpan";
import SocialMedias from "@/components/spans/SocialMediaSpan";
import X from "@/components/icons/specificIcons/xCross";
import MobileNavInterface from "./MobileNavInterface";

export default function MobileNavBar({ props }: MobileNavInterface) {
  return (
    <nav
      ref={props.navRef}
      className="flex flex-col gap-y-10 py-10 text-white h-full px-5"
    >
      <X setOpen={props.setOpen} />
      <SiteNavigation />
      <SocialMedias />
    </nav>
  );
}

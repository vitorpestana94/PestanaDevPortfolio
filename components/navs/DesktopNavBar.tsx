import SiteNavigation from "@/components/spans/SiteNavigationSpan";
import SocialMedias from "@/components/spans/SocialMediaSpan";
export default function DesktopNavigation() {
  return (
    <div className="flex items-center gap-x-10 xl:gap-x-14 ">
      <SiteNavigation />
      <SocialMedias />
    </div>
  );
}

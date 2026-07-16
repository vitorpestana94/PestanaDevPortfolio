import VP from "@components/icons/Icons";
import DesktopNavBar from "@components/navs/DesktopNavBar";

export default function DesktopHeaderContent() {
   return (
      <span className="flex justify-between items-center w-full homeBlur px-5 lg:px-10 py-1.5">
         <VP iconName="vP" className="homeVp" />
         <DesktopNavBar />
      </span>
   );
}

"use client";

import VP from "../../icons/Icons";
import useIsMobile from "@/hooks/useIsMobile";
import MobileNavigation from "./subComponents/MobileNavigation";
import DesktopNavBar from "../../navs/DesktopNavBar";

export default function HomeHeader() {
  const { isMobile } = useIsMobile();

  return (
    <header className="flex sticky justify-between items-center mt-2 ml-4 sm:mx-20 xl:mx-[90px] xl:mt-4 3xl:mx-72 3xl:mt-8">
      <VP
        iconName="vP"
        className=" aspect-square w-24 md:w-28 xl:w-32 3xl:w-44 4xl:w-60"
      />
      {isMobile ? <MobileNavigation /> : <DesktopNavBar />}
    </header>
  );
}

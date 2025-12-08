"use client";

import * as motion from "motion/react-client";
import VP from "../../icons/Icons";
import useIsMobile from "@/hooks/useIsMobile";
import MobileNavigation from "./subComponents/MobileNavigation";
import DesktopNavBar from "../../navs/DesktopNavBar";

export default function HomeHeader() {
  const { isMobile } = useIsMobile();

  return (
    <motion.header
      className="flex sticky justify-between z-50 mx-5 sm:mx-16 xl:mx-36 items-center self-center pointer-events-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <VP
        iconName="vP"
        className=" aspect-square w-24 md:w-28 xl:w-32 3xl:w-44 4xl:w-60"
      />
      {isMobile ? <MobileNavigation /> : <DesktopNavBar />}
    </motion.header>
  );
}

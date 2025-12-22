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
      className="flex sticky justify-between z-50 sm:mx-16 xl:mx-36 items-center self-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <VP iconName="vP" className="homeVp" />
      {isMobile ? <MobileNavigation /> : <DesktopNavBar />}
    </motion.header>
  );
}

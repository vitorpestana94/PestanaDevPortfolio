"use client";

import * as motion from "motion/react-client";
import VP from "../../icons/Icons";
import useIsMobile from "@/hooks/useIsMobile";
import MobileContent from "./subComponents/MobileHeaderContent";
import DesktopContent from "./subComponents/DesktopHeaderContent";

export default function HomeHeader() {
   const { isMobile } = useIsMobile();

   return (
      <motion.header
         className="absolute w-full top-0 sm:px-10 xl:px-36 self-center z-50 mt-5 sm:mt-5"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.4 }}
      >
         {isMobile ? <MobileContent /> : <DesktopContent />}
      </motion.header>
   );
}

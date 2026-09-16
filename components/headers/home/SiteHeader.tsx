"use client";

import * as motion from "motion/react-client";
import useIsMobile from "@/hooks/useIsMobile";
import MobileContent from "./subComponents/MobileHeaderContent";
import DesktopContent from "./subComponents/DesktopHeaderContent";

export default function SiteHeader({ className } : { className?: string }) {
   const { isMobile } = useIsMobile();

   return (
      <motion.header
         className={`absolute w-full top-0 sm:px-10 xl:px-36 self-center z-50 sm:mt-5 ${className}`}
         initial={{
            y: -100,
         }}
         animate={{
            y: 0,
         }}
         transition={{
            duration: 0.5,
            ease: "easeOut",
         }}
      >
         {isMobile ? <MobileContent /> : <DesktopContent />}
      </motion.header>
   );
}

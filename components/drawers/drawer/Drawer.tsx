"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import Interface from "./DrawerInterface";
import useHandleMouseDown from "@/hooks/useHandleKeyDown";
import Icon from "@/components/icons/Icons";

export default function Drawer({ title, children, close }: Interface) {
   const drawerRef = useRef<HTMLDivElement>(null);

   useHandleMouseDown({
      shouldHandleNow: close !== undefined,
      ref: drawerRef,
      mouseDownCallBack: () => {
         close!();
      },
   });

   return (
      <div className="blurBg fixed top-0 left-0 right-0 bottom-0 w-full h-full flex justify-end z-50 text-white">
         <motion.div
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="homeGrayBg h-full w-[85%] sm:w-[60%] lg:w-[40%] xl:w-[30%] flex flex-col gap-y-8
            px-6 sm:px-10 py-8 overflow-y-auto"
         >
            <span className="flex justify-between items-center gap-x-4">
               <h2 className="authFormTitle">{title}</h2>
               {close && (
                  <button type="button" className="cursor-pointer shrink-0" onClick={close}>
                     <Icon iconName="xCross" className="aspect-square w-4" />
                  </button>
               )}
            </span>
            {children}
         </motion.div>
      </div>
   );
}

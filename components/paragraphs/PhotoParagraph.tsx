"use client";

import { motion } from "motion/react";
import useEffetInView from "@/hooks/useEffetInView";
import { useTranslations } from "next-intl";
import Frame from "../divs/frameDiv/FrameDiv";

export default function PhotoParagraph() {
   const { ref, isInView } = useEffetInView();
   const t = useTranslations("home.segundaSessao.about");

   return (
      <Frame
         props={{
         className:"w-[75%] sm:w-[85%] xl:1/2 framePadding order-1 xl:order-2",
         waitIsInView: true,
      }}>
         <motion.p
            className="homeParagraph"
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 2 }}
         >
            {t.rich("zeLeiteiro", { strong: (chunks) => <strong className="text-white">{chunks}</strong>})}
         </motion.p>
      </Frame>
   );
}

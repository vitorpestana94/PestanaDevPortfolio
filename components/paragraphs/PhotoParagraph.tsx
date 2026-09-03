"use client";

import { motion } from "motion/react";
import useEffetInView from "@/hooks/useEffetInView";
import { useTranslations } from "next-intl";

export default function PhotoParagraph() {
   const { ref, isInView } = useEffetInView();
   const t = useTranslations("home.segundaSessao.about");

   return (
      <motion.p
         className="homeParagraph px-14.5 xl:px-24 2xl:px-38 3xl:px-46 4xl:px-56"
         ref={ref}
         initial={{ opacity: 0, x: 20 }}
         animate={isInView ? { opacity: 1, x: 0 } : {}}
         transition={{ duration: 1.2, delay: 2 }}
      >
         {t("zeLeiteiro")}
      </motion.p>
   );
}

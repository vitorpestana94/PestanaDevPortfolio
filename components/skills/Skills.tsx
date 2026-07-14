"use client";

import { skills } from "@/constants/skillsConstants";
import Skill from "./Skill";
import { motion } from "motion/react";
import isEven from "@/utils/numbers/isEven";
import useIsMobile from "@/hooks/useIsMobile";

export default function Skills() {
   const { isMobile } = useIsMobile();

   return (
      <div className="w-1/2 mx-auto flex flex-col gap-6 3xl:gap-8">
         {skills.map((row, i) => (
            <motion.div
               key={i}
               className="flex justify-center gap-6 3xl:gap-8"
               initial={{ opacity: 0, x: isEven(i) ? -100 : 100 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{
                  delay: isMobile ? 1 : 2,
               }}
            >
               {row.map((skill, index) => (
                  <Skill key={index} skill={skill} />
               ))}
            </motion.div>
         ))}
      </div>
   );
}

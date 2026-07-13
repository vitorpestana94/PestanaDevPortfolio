"use client";

import { skills } from "@/constants/skillsConstants";
import Skill from "./Skill";
import { motion } from "motion/react";
import useEffetInView from "@/hooks/useEffetInView";
import isEven from "@/utils/numbers/isEven";

export default function Skills() {
   const { ref, isInView } = useEffetInView();

   return (
      <div className="w-1/2 mx-auto flex flex-col gap-6 3xl:gap-8">
         {skills.map((row, i) => (
            <motion.div
               key={i}
               ref={ref}
               className="flex justify-center gap-6 3xl:gap-8"
               initial={{ opacity: 0, x: isEven(i) ? -100 : 100 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{
                  duration: 1,
                  delay: 1,
                  delayChildren: 1,
                  staggerChildren: 1,
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

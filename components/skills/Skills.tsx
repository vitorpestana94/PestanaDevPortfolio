"use client";

import { skills } from "@/constants/skillsConstants";
import Skill from "./Skill";
import { motion } from "motion/react";
import isEven from "@/utils/numbers/isEven";
import useEffetInView from "@/hooks/useEffetInView";

export default function Skills() {
   const { ref, isInView } = useEffetInView();

   return (
      <div className="w-1/2 mx-auto flex flex-col gap-6 mt-20">
         <span ref={ref}></span>
         {skills.map((row, i) => (
            <motion.div
               key={i}
               className="flex justify-center gap-6 3xl:gap-8"
               initial={{ opacity: 0, x: isEven(i) ? -100 : 100 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.9, delay: 2 }}
            >
               {row.map((skill, index) => (
                  <Skill key={index} skill={skill} />
               ))}
            </motion.div>
         ))}
      </div>
   );
}

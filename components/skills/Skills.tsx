"use client";

import { motion } from "motion/react";
import SkillDiv from "../divs/skillDiv/SkillDiv";
import useEffetInView from "@/hooks/useEffetInView";

export default function Skills() {
   const { ref, isInView } = useEffetInView();

   return (
      <motion.div 
         ref={ref}
         initial={{ opacity: 0, x: -20 }}
         animate={isInView ? { opacity: 1, x: 0 } : {}}
         transition={{ duration: 0.9, delay: 1.5 }}
         className="grid gap-6 mt-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  
         mx-10 md:mx-15 lg:mx-20 xl:mx-25">
            <SkillDiv skill="backend"/>
            <SkillDiv skill="database"/>
            <SkillDiv skill="frontend"/>
            <SkillDiv skill="tool"/>
      </motion.div>
   );
}

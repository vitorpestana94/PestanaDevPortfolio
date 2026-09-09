"use client";

import { motion } from "motion/react";
import SkillDiv from "../divs/skillDiv/SkillDiv";
import useEffetInView from "@/hooks/useEffetInView";

export default function Skills() {
   const { ref, isInView } = useEffetInView();

   return (
      <motion.div 
         ref={ref} 
         animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
         className="grid gap-6 mt-20 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  
         mx-10 md:mx-15 lg:mx-20 xl:mx-25">
            <SkillDiv skill="backend"/>
            <SkillDiv skill="frontend"/>
            <SkillDiv skill="tool"/>
            <SkillDiv skill="database"/>
      </motion.div>
   );
}

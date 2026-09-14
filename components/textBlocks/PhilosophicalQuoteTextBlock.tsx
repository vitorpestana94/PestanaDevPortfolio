import useEffetInView from "@/hooks/useEffetInView";
import { motion } from "motion/react";

export default function PhilosophicalQuoteTextBlock({ quote, reference } : { quote: string, reference:string }){
    const { ref, isInView } = useEffetInView();
    
    return (
        <motion.blockquote className="px-5 py-2 nasaBorder flex flex-col gap-y-2 self-end mt-auto my-2"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 2.5 }}>
            <p className="homeParagraph">
                {`"${quote}"`}
            </p>
            <p  className="text-[#F5F5F5] text-[0.5rem] xl:text-[0.625rem] 3xl:text-xs self-end">
                {`— ${reference}`}
            </p>
        </motion.blockquote>
    )
}
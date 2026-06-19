import ErrorInterface from "./ErrorInterface";
import { motion } from "motion/react";

export default function Error({
   shouldRender,
   message,
   styles,
}: ErrorInterface) {
   return (
      <>
         {shouldRender && (
            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1.5 }}
               className={`text-red-600 xxs:text-[0.375rem] xs:text-[0.5rem] lg:text-[0.625rem] text-left mx-auto whitespace-pre-line ${styles}`}
            >
               {message}
            </motion.p>
         )}
      </>
   );
}

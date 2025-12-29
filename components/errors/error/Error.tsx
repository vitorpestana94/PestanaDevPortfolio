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
          className={`text-red-600 between100And250:text-[0.46rem] text-[0.625rem] lg:text-[0.625rem] my-1 ml-4 ${styles}`}
        >
          {message}
        </motion.p>
      )}
    </>
  );
}

import PortfolioDivTextInterface from "./PortfolioDivText/PortfolioDivText";
import { motion } from "motion/react";

export default function PortfolioDivText({
  show,
  text,
}: PortfolioDivTextInterface) {
  return (
    <>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute z-50 top-full w-full rounded-b-2xl px-4 py-2 bg-white/30 backdrop-blur-lg  shadow-xl"
        >
          <p className="text-black text-[0.875rem] leading-[1.3]">{text}</p>
        </motion.div>
      )}
    </>
  );
}

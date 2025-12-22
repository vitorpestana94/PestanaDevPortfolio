import PortfolioDivTextInterface from "./PortfolioDivText/PortfolioDivText";
import { motion } from "motion/react";
import useIsMobile from "@/hooks/useIsMobile";

export default function PortfolioDivText({
  show,
  text,
  style,
}: PortfolioDivTextInterface) {
  const { isMobile } = useIsMobile();

  return (
    <>
      {show && !isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`absolute z-50 px-3 py-2 bg-black/20 backdrop-blur-lg ${
            style ? style : "top-full w-full rounded-b-2xl"
          }`}
        >
          <p className="text-white text-justify text-[0.5rem] leading-[1.3]">
            {text}
          </p>
        </motion.div>
      )}
    </>
  );
}

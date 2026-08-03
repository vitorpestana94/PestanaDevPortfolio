import HomePortfolioDivInterface from "./HomePortfolioDivInterface";
import Link from "next/link";
import { motion } from "motion/react";
import DivText from "../PortfolioDivText";
import useHomePortfolioDiv from "./useHomePortfolioDivLink";
import Image from "next/image";

export default function HomePortfolioLink({
   props,
}: HomePortfolioDivInterface) {
   const { hoverStart, hoverEnd, handleTap, linkRef, show, style } =
      useHomePortfolioDiv();

   return (
      <motion.div
         whileHover={{ scale: 1.15 }}
         whileTap={{ scale: 1.15 }}
         onTap={handleTap}
         onHoverEnd={() => hoverStart()}
         onHoverStart={() => hoverEnd()}
         transition={{ type: "spring", stiffness: 150, damping: 6 }}
         className={`${props.size.widthAndHeight} ${style} relative`}
      >
         <Link
            ref={linkRef}
            target="_blank"
            rel="noopener noreferrer"
            href={props.picture?.routeOrSiteUrl ?? ""}
            className="pointer-events-none sm:pointer-events-auto"
         >
            <Image
               src={`/png/${props.picture?.pictureUrl}.png`}
               alt=""
               fill
               className="object-fill absolute inset-0"
            />
            <DivText
               show={show}
               style={props.picture?.style}
               text={props.text ?? ""}
               title={props.title}
               icons={props.icons}
            />
         </Link>
      </motion.div>
   );
}

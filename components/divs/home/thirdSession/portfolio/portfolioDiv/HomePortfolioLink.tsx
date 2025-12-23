import HomePortfolioDivInterface from "./HomePortfolioDivInterface";
import Link from "next/link";
import { motion } from "motion/react";
import DivText from "../PortfolioDivText";
import useHomePortfolioDiv from "./useHomePortfolioDivLink";

export default function HomePortfolioLink({
  props,
}: HomePortfolioDivInterface) {
  const { hoverStart, hoverEnd, handleTap, linkRef, show, style } =
    useHomePortfolioDiv();

  return (
    <motion.div
      whileHover={{ scale: 1.4 }}
      whileTap={{ scale: 1.2 }}
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
        <div
          className={`absolute inset-0 bg-no-repeat bg-cover`}
          style={{
            backgroundImage: `url('/png/${props.picture?.pictureUrl}.png')`,
          }}
        />
      </Link>
      <DivText
        show={show}
        style={props.picture?.style}
        text="koe koe koe koe koe koe koe koe koe koe koe koe koe koe koe koe koe koe koe koe koe  koe koe koe koe koe koe koe koe koe koe koe koe koe koe koe koe koe koe koe koe koe koe koe koe"
      />
    </motion.div>
  );
}

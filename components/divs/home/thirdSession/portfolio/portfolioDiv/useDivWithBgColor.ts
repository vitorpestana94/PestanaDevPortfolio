"use client";

import { useAnimate } from "motion/react";
import { useEffect } from "react";

export default function useDivWithBgColor(colors: string[]) {
  const [motionRef, animate] = useAnimate();

  useEffect(() => {
    const motionElement = motionRef.current;

    const motionAnimation = animate(
      motionElement,
      { backgroundColor: colors },
      {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }
    );

    return () => {
      motionAnimation.cancel();
    };
  }, []);

  return { motionRef };
}

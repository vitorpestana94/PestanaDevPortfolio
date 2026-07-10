"use client";

import HomePortfolioDivInterface from "./HomePortfolioDivInterface";
import PortfolioLink from "./HomePortfolioLink";
import DivWithBgColors from "./HomePortofolioDivWithBgColors";
import DivGif from "./HomePortfolioDivGifOrImage";

export default function HomePortfolioDiv({
   type,
   props,
}: HomePortfolioDivInterface) {
   function getComponent() {
      if (type) {
         const typePerComponet = {
            link: <PortfolioLink props={props} />,
            bgColors: <DivWithBgColors props={props} />,
            gifOrImage: <DivGif props={props} />,
         };

         return typePerComponet[type] ?? null;
      }

      return null;
   }

   return <>{getComponent()}</>;
}

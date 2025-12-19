"use client";

import HomePortfolioDivInterface from "./HomePortfolioDivInterface";
import PortfolioLink from "./HomePortfolioLink";
import DivWithBgColors from "./HomePortofolioDivWithBgColors";
import DivGif from "./HomePortfolioDivGifOrImage";
import { JSX } from "react";

export default function HomePortfolioDiv({
  type,
  props,
}: HomePortfolioDivInterface) {
  function getComponent() {
    let component: JSX.Element | null;

    switch (type) {
      case "link":
        component = <PortfolioLink props={props} />;
        break;
      case "bgColors":
        component = <DivWithBgColors props={props} />;
        break;
      case "gifOrImage":
        component = <DivGif props={props} />;
        break;
      default:
        component = null;
        break;
    }

    return component;
  }

  return <>{getComponent()}</>;
}

"use client";

import { JSX } from "react";
import IconInterface from "./IconInterface";
import { icons } from "@/constants/iconsConstants";

export type IconName = keyof typeof icons;

export default function Icon({ iconName, className }: IconInterface) {
   const Icon: JSX.Element = icons[iconName];

   return <Icon.type className={className} />;
}

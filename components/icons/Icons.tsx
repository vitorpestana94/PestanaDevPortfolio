"use client";

import { JSX } from "react";
import IconInterface from "./IconInterface";
import VP from "@public/icons/vP.svg";
import Instagram from "@public/icons/Instagram.svg";
import Whatsapp from "@public/icons/Whatsapp.svg";
import Linkedin from "@public/icons/Linkedin.svg";
import Email from "@public/icons/Email.svg";
import Menu from "@public/icons/menu.svg";
import XCross from "@public/icons/xCross.svg";

export const icons = {
  vP: <VP />,
  instagram: <Instagram />,
  whatsapp: <Whatsapp />,
  linkedin: <Linkedin />,
  email: <Email />,
  menu: <Menu />,
  xCross: <XCross />,
} as const;

export type IconName = keyof typeof icons;

export default function Icon({ iconName, className }: IconInterface) {
  const Icon: JSX.Element = icons[iconName];

  return <Icon.type className={className} />;
}

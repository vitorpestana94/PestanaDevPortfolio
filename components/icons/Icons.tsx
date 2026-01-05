"use client";

import { JSX } from "react";
import IconInterface from "./IconInterface";
import VP from "@public/icons/VP.svg";
import Instagram from "@public/icons/Instagram.svg";
import Whatsapp from "@public/icons/Whatsapp.svg";
import Linkedin from "@public/icons/Linkedin.svg";
import GitHub from "@public/icons/github.svg";
import Google from "@public/icons/Google.svg";
import Email from "@public/icons/Email.svg";
import Menu from "@public/icons/Menu.svg";
import XCross from "@public/icons/XCross.svg";
import Profile from "@public/icons/profile.svg";
import Padlock from "@public/icons/padlock.svg";
import EyeOn from "@public/icons/eyeOn.svg";
import EyeOff from "@public/icons/eyeOff.svg";

export const icons = {
  vP: <VP />,
  instagram: <Instagram />,
  whatsapp: <Whatsapp />,
  linkedin: <Linkedin />,
  email: <Email />,
  menu: <Menu />,
  xCross: <XCross />,
  profile: <Profile />,
  padlock: <Padlock />,
  eyeOn: <EyeOn />,
  eyeOff: <EyeOff />,
  gitHub: <GitHub />,
  google: <Google />,
} as const;

export type IconName = keyof typeof icons;

export default function Icon({ iconName, className }: IconInterface) {
  const Icon: JSX.Element = icons[iconName];

  return <Icon.type className={className} />;
}

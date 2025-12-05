"use client";

import { JSX } from "react";
import IconInterface from "./Icon";
import VP from "@public/icons/vP.svg"
import Facebook from "@public/icons/Facebook.svg";
import Instagram from "@public/icons/Instagram.svg";
import Whatsapp from "@public/icons/Whatsapp.svg";
import Linkedin from "@public/icons/Linkedin.svg";

export const icons = {
    vP: <VP />,
    facebook: <Facebook />,
    instagram: <Instagram />,
    whatsapp: <Whatsapp />,
    linkedin: <Linkedin />
} as const;

export type IconName = keyof typeof icons;

export default function Icon({ iconName, className }: IconInterface) {
    const Icon: JSX.Element = icons[iconName];

    return <Icon.type className={className} />
}
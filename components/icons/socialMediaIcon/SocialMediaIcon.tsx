import Link from "next/link"; 
import Interface from "./SocialMediaIconInterface";
import Icon from "../Icons";

export default function SocialMediaIcon({props}:Interface){
    return (
        <Link href={props.linkToSocialMedia}>
            <Icon iconName={props.iconName} className="homeSocialMediaIcons" />
        </Link>
    )
}
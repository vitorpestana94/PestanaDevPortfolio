import Link from "next/link";
import Interface from "./SocialMediaIconInterface";
import Icon from "../../Icons";

export default function SocialMediaIcon({ props }: Interface) {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={props.linkToSocialMedia}
      className="flex justify-center items-center"
    >
      <Icon iconName={props.iconName} className="homeSocialMediaIcons" />
    </Link>
  );
}

import { IconName } from "../../Icons";

export default interface SocialMediaIcon {
  props: {
    iconName: IconName;
    className?: string;
    linkToSocialMedia: string;
  };
}

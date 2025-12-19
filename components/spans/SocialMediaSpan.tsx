import SocialMediaIcon from "../icons/specificIcons/socialMediaIcon/SocialMediaIcon";
import Email from "../icons/Icons";
import Link from "next/link";
import options from "@/data/options.json";

export default function SocialMediaSpan() {
  return (
    <span
      className="grid grid-rows-1 grid-cols-2 w-full gap-x-2
    sm:w-auto sm:grid-rows-0 sm:grid-cols-0 sm:flex sm:flex-row sm:gap-y-0 sm:gap-x-4 items-center"
    >
      <SocialMediaIcon
        props={{
          iconName: "instagram",
          linkToSocialMedia: options.socialMedias.instagram,
        }}
      />
      <SocialMediaIcon
        props={{
          iconName: "linkedin",
          linkToSocialMedia: options.socialMedias.linkedin,
        }}
      />
      <SocialMediaIcon
        props={{
          iconName: "whatsapp",
          linkToSocialMedia: options.socialMedias.whatsapp,
        }}
      />
      <Link href={"#email"} className="flex justify-center items-center">
        <Email
          iconName="email"
          className="w-[23px] sm:w-[18px] md:w-[22px] xl:w-[26px] 3xl:w-[46px] stroke-[#bfbfbf] hover:stroke-[#38b6ff]"
        />
      </Link>
    </span>
  );
}

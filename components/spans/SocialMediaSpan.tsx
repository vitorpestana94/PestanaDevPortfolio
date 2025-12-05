import SocialMediaIcon from "../icons/specificIcons/socialMediaIcon/SocialMediaIcon";
import Email from "../icons/Icons";
import Link from "next/link";

export default function SocialMediaSpan() {
  return (
    <span
      className="grid grid-rows-1 grid-cols-2 w-full 
    sm:w-auto sm:flex sm:flex-row sm:gap-y-0 sm:gap-x-4 items-center"
    >
      <SocialMediaIcon
        props={{
          iconName: "instagram",
          linkToSocialMedia: "https://www.instagram.com/vitorluizpestana/",
        }}
      />
      <SocialMediaIcon
        props={{
          iconName: "linkedin",
          linkToSocialMedia:
            "https://www.linkedin.com/in/vitor-pestana-9ab88b200/",
        }}
      />
      <SocialMediaIcon
        props={{
          iconName: "whatsapp",
          linkToSocialMedia: "https://wa.me/5521991505625",
        }}
      />
      <Link href={"#email"} className="flex justify-center items-center">
        <Email
          iconName="email"
          className="w-[23px] sm:w-[18px] md:w-[22px] xl:w-[26px] 3xl:w-[46px] stroke-[#bfbfbf] cursor-pointer"
        />
      </Link>
    </span>
  );
}

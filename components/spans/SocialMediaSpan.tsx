import SocialMediaIcon from "../icons/specificIcons/socialMediaIcon/SocialMediaIcon";
import Email from "../icons/Icons";
import Link from "next/link";
import options from "@/data/options.json";

export default function SocialMediaSpan() {
   return (
      <span
         className="grid grid-rows-2 grid-cols-2 gap-x-4 self-center gap-y-6 relative z-50
         sm:w-auto sm:grid-rows-0 sm:grid-cols-0 sm:flex sm:flex-row sm:gap-x-3"
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
               className="homeSocialMediaIcons fill-none hover:fill-none stroke-[#bfbfbf]! hover:stroke-[#38b6ff]!"
            />
         </Link>
      </span>
   );
}

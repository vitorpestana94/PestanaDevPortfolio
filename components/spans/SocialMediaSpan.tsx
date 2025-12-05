import SocialMediaIcon from "../icons/socialMediaIcon/SocialMediaIcon"
export default function SocialMediaSpan(){
    return (
        <span className="flex space-x-4 items-center">
            <SocialMediaIcon props={{iconName:"instagram", linkToSocialMedia:"https://www.instagram.com/vitorluizpestana/" }} />
            <SocialMediaIcon props={{iconName:"linkedin", linkToSocialMedia:"teste"}} />
            <SocialMediaIcon props={{iconName:"whatsapp", linkToSocialMedia:"teste" }} />
        </span>
    )
}
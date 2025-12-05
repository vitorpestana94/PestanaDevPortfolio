import VP from "../icons/Icons";
import HeaderSpan from "../spans/HeaderSpan";
import SocialMedias from "../spans/SocialMediaSpan";

export default function HomeHeader(){
    return (
        <header className="flex justify-between items-center
        2xl:mx-[90px] 2xl:mt-4">
            <VP iconName="vP"/>
            <div className="flex space-x-10 items-center">
                <HeaderSpan />
                <SocialMedias />
            </div>
        </header>
    )
}
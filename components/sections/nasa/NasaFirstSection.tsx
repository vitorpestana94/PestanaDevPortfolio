import Header from "@/components/headers/home/HomeHeader";
import BackGround from "@/components/divs/nasa/firstSession/NasaFirstSessionBg";
import NasaFirstSessionContent from "@/components/divs/nasa/firstSession/NasaFirstSessionContent";

export default function NasaFirstSection(){
    return (
        <BackGround>
            <Header className="static!"/>
            <NasaFirstSessionContent />
        </BackGround>
    )
}
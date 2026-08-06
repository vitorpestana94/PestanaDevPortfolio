import Header from "@/components/headers/home/HomeHeader";
import BackGround from "@/components/divs/nasa/firstSession/NasaFirstSessionBg";
import NasaContent from "@/components/divs/nasa/firstSession/NasaFirstSessionContent";

export default function NasaFirstSection(){
    return (
        <BackGround>
            <Header />
            <NasaContent />
        </BackGround>
    )
}
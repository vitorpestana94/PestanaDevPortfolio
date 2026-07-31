import Main from "../wrappers/MainLayout";
import FirstSection from "../sections/nasa/NasaFirstSection";
import SecondSection from "../sections/nasa/NasaSecondSection";

export default function NasaAstronomyPictureOfTheDayPage(){
    return (
        <Main>
            <FirstSection />
            <SecondSection />
        </Main>
    )
}
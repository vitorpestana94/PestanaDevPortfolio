import Main from "../wrappers/MainLayout";
import FirstSection from "../sections/nasa/NasaFirstSection";
import SecondSection from "../sections/nasa/NasaSecondSection";
import ensureAuthenticated from "@/utils/authentication/ensureAuthenticated";

export default async function NasaAstronomyPictureOfTheDayPage(){
    await ensureAuthenticated("nasa");
    
    return (
        <Main>
            <FirstSection />
            <SecondSection />
        </Main>
    )
}
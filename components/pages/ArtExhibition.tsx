import Main from "../wrappers/MainLayout";
import FirstSection from "../sections/artExhibition/ArtExhibitionFirstSection";
import ensureAuthenticated from "@/utils/authentication/ensureAuthenticated";

export default async function ArtExhibition(){
    await ensureAuthenticated();
    
    return (
    <Main>
        <FirstSection />
    </Main>
    )
}
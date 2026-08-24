import Main from "../wrappers/MainLayout";
import FirstSection from "../sections/artExhibition/ArtExhibitionFirstSection";
import ensureAuthenticated from "@/utils/authentication/ensureAuthenticated";

export default async function ArtExhibition(){
    await ensureAuthenticated("art-exhibition");
    
    return (
    <Main>
        <FirstSection />
    </Main>
    )
}
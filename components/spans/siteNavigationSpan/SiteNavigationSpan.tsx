import { Link } from "@/i18n/routing";
import useSiteNavigationSpan from "./useSiteNavigationSpan";
import UserButton from "@/components/buttons/userButton/UserButton";
import { DefaultHeaderLinks, NasaHeaderLinks, ArtExhibitionLinks } from "@/components/links/HeaderLinks";

function getLinks(flow: string, t: (param: string) => string){
   const flowPerLink: {[key: string]: React.ReactElement} = {
      "nasa" : <NasaHeaderLinks />,
      "art-exhibition" : <ArtExhibitionLinks />,
      "default" : <DefaultHeaderLinks />
   }

   return flowPerLink[flow] ?? flowPerLink.default;
}

export default function SiteNavigationSpan() {
   const { t, isUserLogged, userData, flow } = useSiteNavigationSpan();

   return (
      <span
         className="flex flex-col items-center text-[#bfbfbf] z-50
        text-[1rem] gap-y-5 
        sm:gap-x-4.5 sm:flex-row sm:gap-y-0
        md:gap-x-5
        lg:gap-x-6
        xl:gap-x-8 
        4xl:text-[1.125rem] 4xl:gap-x-10"
      >
         {
            getLinks(flow, t)
         }
         {isUserLogged ? (
            <UserButton user={userData.user} />
         ) : (
            <Link className="hoverPestana" href={"/authentication/login"}>
               {t("logar")}
            </Link>
         )}
      </span>
   );
}

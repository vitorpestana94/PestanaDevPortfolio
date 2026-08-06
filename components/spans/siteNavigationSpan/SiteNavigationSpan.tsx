import { Link } from "@/i18n/routing";
import useSiteNavigationSpan from "./useSiteNavigationSpan";
import UserButton from "@/components/buttons/userButton/UserButton";

function getLinks(flow: string, t: (param: string) => string){
   let links;

   switch (flow){
      case "nasa":
         links = (
            <>
               <Link className="hoverPestana" href={"#todayPicture"}>
                  {t("nasa.today")}
               </Link>
               <Link className="hoverPestana" href={"#picturesOfTheWeek"}>
                  {t("nasa.week")}
               </Link>
            </>
         )
         break;
      default:
         links = (
            <>
               <Link className="hoverPestana" href={"#sobre"}>
                  {t("home.sobre")}
               </Link>
               <Link className="hoverPestana" href={"#minhasHabilidades"}>
                  {t("home.mySkills")}
               </Link>
               <Link className="hoverPestana" href={"#meuTrabalho"}>
                  {t("home.meuTrabalho")}
               </Link>
            </>
         )
         break;
   }
   
   return links
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

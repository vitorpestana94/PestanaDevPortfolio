import options from "../../../data/options.json";
import useProfileDivBg from "./useProfileDivBg";
import DivBg from "../DivBg/DivBg";

export default function ProfileDivBg() {
   const { t } = useProfileDivBg();

   return (
      <DivBg
         bgUrl={options.backgroundImages.authBanner}
         text={{
            title: "title",
            paragraph: "paragraph",
         }}
      />
   );
}

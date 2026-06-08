import options from "../../../data/options.json";
import DivBg from "../DivBg/DivBg";

export default function ProfileDivBg() {
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

import Interface from "./DivBgInterface";
import Text from "../../textBlocks/authTextBlock/AuthTextBlock";
import PixelBlast from "@components/PixelBlast";

export default function DivBg({ text }: Interface) {
   return (
      <div className="flex-2 flex flex-col justify-center items-center relative homeBg">
         <PixelBlast
            variant="square"
            className={`absolute! inset-0!`}
            pixelSize={3}
            color="#38b6ff"
            patternScale={2}
            patternDensity={1}
            enableRipples
            rippleSpeed={0.3}
            rippleThickness={0.1}
            rippleIntensityScale={1}
            speed={0.5}
            transparent
            edgeFade={0.5}
         />
         <Text
            props={{
               title: text.title,
               paragraph: text.paragraph,
            }}
         />
      </div>
   );
}

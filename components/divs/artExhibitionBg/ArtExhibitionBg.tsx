import dynamic from "next/dynamic";

const DotField = dynamic(
  () => import("@components/backgrounds/DotField"),
  { ssr: false }
);

const DotFieldAny = DotField as any;

export default function ArtExhibitionBg({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="w-full relative h-full flex flex-col justify-center z-40">
         <div className="absolute inset-0 -z-10 opacity-50">
            <DotFieldAny
                dotRadius={2.5}
                dotSpacing={14}
                cursorRadius={100}
                cursorForce={0}
                bulgeOnly
                bulgeStrength={67}
                glowRadius={50}
                sparkle={false}
                waveAmplitude={0}
                gradientFrom="#38b6ff"
                gradientTo="rgba(180, 151, 207, 0.25)"
                glowColor="#120F17"
            />
         </div>
         {children}
      </div>
   );
}
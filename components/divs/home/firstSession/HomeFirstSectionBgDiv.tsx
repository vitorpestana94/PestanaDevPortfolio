import Waves from "@components/backgrounds/Waves";

export default function HomeFirstSectionBgDiv({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="w-full relative min-h-dvh flex flex-col justify-center z-40">
         <div className="absolute inset-0 -z-10 opacity-15">
            <Waves
               lineColor="#ffff"
               backgroundColor="transparent"
               waveSpeedX={0.02}
               waveSpeedY={0.01}
               waveAmpX={40}
               waveAmpY={20}
               friction={0.9}
               tension={0.01}
               maxCursorMove={120}
               xGap={12}
               yGap={36}
            />
         </div>
         {children}
      </div>
   );
}
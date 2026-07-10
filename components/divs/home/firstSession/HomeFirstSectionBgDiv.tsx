export default function HomeFirstSectionBgDiv({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="w-full relative min-h-dvh flex flex-col justify-center">
         <div className="absolute opacity-8 inset-0 bg-[url('/png/homeFirstSectionBackGround.png')] bg-no-repeat bg-cover bg-center" />
         {children}
      </div>
   );
}

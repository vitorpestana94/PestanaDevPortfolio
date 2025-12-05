export default function HomeFirstSectionBgDiv({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full relative">
      <div className="absolute opacity-8 inset-0 z-0 bg-[url('/png/homeFirstSectionBackGround.png')] bg-no-repeat bg-cover bg-center pointer-events-none" />
      {children}
    </div>
  );
}

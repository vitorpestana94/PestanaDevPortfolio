export default function FrameDiv({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative aspect-2/1 w-[35%] sm:w-[22%] xl:w-[18%] 3xl:w-[14%] 4xl:w-[12%] flex justify-center items-center">
      <span className="absolute top-0 left-0 w-4 aspect-square border-t-2 border-l-2 border-white"></span>
      {children}
      <span className="absolute bottom-0 right-0 w-4 aspect-square border-b-2 border-r-2 border-white"></span>
    </div>
  );
}

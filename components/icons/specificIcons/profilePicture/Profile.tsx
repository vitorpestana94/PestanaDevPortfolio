export default function Profile({
   userName,
   className,
   letterStyle,
}: {
   userName: string;
   className?: string;
   letterStyle?: string;
}) {
   const formatUserName = (name: string) => {
      return name
         .split(" ")
         .map((namePart, index) => namePart[0].toUpperCase())
         .join("");
   };

   return (
      <div
         className={`text-white bg-[#38b6ff] border-[#38b6ff] cursor-pointer border
         flex justify-center items-center 
         aspect-square w-8 lg:w-9 xl:w-10 3xl:w-11 rounded-full ${className}`}
      >
         <p
            className={`text-center w-full tracking-wider font-black text-[0.625rem] md:text-xs leading-none ${letterStyle}`}
         >
            {formatUserName(userName)}
         </p>
      </div>
   );
}

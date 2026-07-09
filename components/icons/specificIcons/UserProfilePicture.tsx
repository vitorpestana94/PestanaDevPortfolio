export default function UserProfilePicture({
   userName,
   mainDivClassName,
   paragraphStyle,
}: {
   userName: string;
   mainDivClassName?: string;
   paragraphStyle?: string;
}) {
   const getInitials = (name: string) => {
      return name
         .split(" ")
         .map((nameParts, index) => {
            if (index < 2) {
               return nameParts[0].toUpperCase();
            }
         })
         .join("");
   };

   return (
      <div
         className={`relative aspect-square w-8 lg:w-8.5 xl:w-9.5 3xl:w-10.5 cursor-pointer bg-[#38b6ff] rounded-full
        flex items-center justify-center ${mainDivClassName}`}
      >
         <p
            className={`text-[0.625rem] md:text-[0.875rem] text-white tracking-widest font-black leading-none ${paragraphStyle} text-center ml-0.5`}
         >
            {getInitials(userName).trim()}
         </p>
      </div>
   );
}

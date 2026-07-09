export default function ProviderProfilePicture({
   img,
   className,
}: {
   img: string;
   className?: string;
}) {
   return (
      <div
         className={`relative aspect-square w-8 lg:w-8.5 xl:w-9.5 3xl:w-10.5 cursor-pointer border-2 rounded-full border-black 
            ${className}`}
      >
         <div
            className={`absolute opacity-70 z-0 inset-0 bg-no-repeat bg-cover bg-center rounded-full`}
            style={{
               backgroundImage: `url(${img})`,
            }}
         />
      </div>
   );
}

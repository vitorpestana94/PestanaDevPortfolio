import Image from "next/image";

export default function ProviderProfilePicture({
   img,
   className,
}: {
   img: string;
   className?: string;
}) {
   return (
      <Image className={`relative aspect-square cursor-pointer border-2 rounded-full border-black
         w-8 
         lg:w-8.5 
         xl:w-9.5 
         3xl:w-10.5 
         ${className}`}
         src={img}
         alt="userProfile"
         width={40}
         height={40}
      />
   );
}

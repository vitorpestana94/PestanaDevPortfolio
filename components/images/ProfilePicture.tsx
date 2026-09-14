import Image from "next/image";

export default function ProfilePicture() {

   return (
      <div className="aspect-square z-0 w-[30%] xl:w-[35%] relative z-0">
         <Image
            className="rounded-full z-0"
            src={"/png/profilePicture.png"}
            alt="pestanaDevPicture"
            fill
            sizes="(min-width: 1280px) 35vw, 30vw"
            style={{ objectFit: "fill" }}
            loading="lazy"
         />
      </div>
   );
}

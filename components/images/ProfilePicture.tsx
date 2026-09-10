import Image from "next/image";

export default function ProfilePicture() {

   return (
      <div className="aspect-square w-full relative z-0">
         <Image
            className="rounded-full z-0"
            src={"/png/profilePicture.png"}
            alt="seuZeLeiteiroPicture"
            fill
            style={{ objectFit: "fill" }}
            loading="lazy"
         />
      </div>
   );
}

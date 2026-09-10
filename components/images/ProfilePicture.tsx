import Image from "next/image";

export default function ProfilePicture() {

   return (
      <div className="aspect-square w-[75%] sm:w-[25%] relative z-0 self-center mx-auto">
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

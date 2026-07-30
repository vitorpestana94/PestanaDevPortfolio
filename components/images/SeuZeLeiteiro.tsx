import Image from "next/image";

export default function SeuZeLeiteiro() {

   return (
      <div className="mx-auto aspect-4/3 w-[75%] sm:w-[70%] 3xl:w-[65%] relative z-0">
         <Image
            className="rounded-lg z-0"
            src={"/png/seuZeLeiteiro.png"}
            alt="seuZeLeiteiroPicture"
            fill
            style={{ objectFit: "fill" }}
            loading="lazy"
         />
      </div>
   );
}

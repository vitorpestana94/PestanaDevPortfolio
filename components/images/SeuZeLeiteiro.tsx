import Image from "next/image";

export default function SeuZeLeiteiro() {

   return (
      <div className="mx-auto aspect-4/3 w-[85%] relative z-0">
         <Image
            className="rounded-lg z-0"
            src={"/png/seuZeLeiteiro.png"}
            alt="seuZeLeiteiroPicture"
            fill
            sizes="(min-width: 1280px) 42vw, (min-width: 640px) 68vw, 80vw"
            style={{ objectFit: "fill" }}
            loading="lazy"
         />
      </div>
   );
}

import Image from "next/image";

export default function SeuZeLeiteiro() {
  return (
    <div className="aspect-2/1 w-[70%] sm:w-[80%] xl:w-[85%] relative self-center xl:mt-40">
      <Image
        src={"/png/seuZeLeiteiro.png"}
        alt="passPicture"
        fill
        style={{ objectFit: "fill" }}
        loading="lazy"
      />
    </div>
  );
}

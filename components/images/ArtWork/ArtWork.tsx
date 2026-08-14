import Interface from "./ArtWorkInterface";
import Image from "next/image";

export default function ArtWork({url, title, date}: Interface){
    return (
        <div className="w-full flex flex-col gap-y-1">
            <div className="relative w-full h-30 md:h-37">
                <Image
                    src={url}
                    alt={title}
                    fill
                    unoptimized
                    quality={85}
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 45vw"
                    className="object-fill"
                    loading="lazy"
                />
            </div>
            <div className="w-full flex justify-between text-white text-[0.5rem] px-1">
                <p className="w-[70%] truncate relative cursor-default">{title}</p>
                <p className="text-nowrap">{date}</p>
            </div>
        </div>
    )
}
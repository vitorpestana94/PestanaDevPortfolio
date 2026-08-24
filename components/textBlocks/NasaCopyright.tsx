import Interface from "@/components/textBlocks/nasaMediaCopyrightAndTitle/NasaMediaCopyrightAndTitleInterface";

export default function NasaCopyright({ copyright, className } : Interface){
    return (
        <>
        {
            copyright &&
            <div className={`flex flex-col gap-y-px text-gray-400 max-w-60
            text-[0.375rem] text-center mt-1.5
            md:text-[0.5rem] md:text-right md:mt-0
            3xl:text-[0.625rem]
            ${className}`}>
                <span>© Copyright:</span>
                <span title={copyright.replace("\n", "")} className="truncate cursor-default">{copyright}</span>
            </div>
        }
        </>
    )
}
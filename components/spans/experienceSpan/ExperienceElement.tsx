export default function ExperienceElement({ title, subtitle, isLastElement } : { title: string, subtitle: string, isLastElement?: boolean }){
    return (
        <span className={`flex flex-col px-5 items-center gap-y-1 text-center 
        ${isLastElement ? "" : "border-r border-[#38b6ff]/30"}`}>
            <p className="text-[#f5f5f5] text-[1rem] lg:text-[1.25rem] xl:text-[1.5rem]">{title}</p>
            <p className="text-[#6b7280] text-[0.625rem] xl:text-xs uppercase">{subtitle}</p>
        </span>
    )
}
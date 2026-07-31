import Interface from "./NasaMediaCopyrightAndTitleInterface";
import Copyright from "@/components/textBlocks/NasaCopyright";
import Title from "@/components/titles/NasaMediaTitle";

export default function NasaMediaCopyrightAndTitle({ title, copyright, className, isSlider } : Interface){
    return (
        <div className={`w-full flex flex-col md:flex-row md:justify-between px-2
        ${isSlider ? "mt-4" : "absolute -bottom-13 md:-bottom-10"}
        ${className}`}>
            <Title title={title} />
            <Copyright copyright={copyright}/>
        </div>
    )
}
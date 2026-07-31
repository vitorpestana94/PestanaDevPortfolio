import Interface from "./NasaMediaCopyrightAndTitleInterface";
import Copyright from "@/components/textBlocks/NasaCopyright";
import Title from "@/components/titles/NasaMediaTitle";

export default function NasaMediaCopyrightAndTitle({ title, copyright } : Interface){
    return (
        <div className={`w-full flex flex-col md:flex-row md:justify-between absolute px-2
       -bottom-13 md:-bottom-10`}>
            <Title title={title} />
            <Copyright copyright={"eu amo meu amor"}/>
        </div>
    )
}
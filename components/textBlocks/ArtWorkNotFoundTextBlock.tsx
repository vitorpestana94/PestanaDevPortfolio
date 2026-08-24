import { useTranslations } from "next-intl";
import Title from "@/components/titles/HomeTitle";

export default function ArtWorkNotFoundTextBlock({ searchTerm } : { searchTerm: string }){
    const t = useTranslations("artExhibition.notFound");

    return (
        <div className="mb-20 flex flex-col justify-center items-center gap-y-2">
            <Title>
                <p className="whitespace-pre-line text-center text-white homeSubTitle">{t("title")}</p>
                <p className="text-center text-gray-400 text-xs px-5 md:px-40 md:text-[1rem] max-w-[70%] self-center whitespace-pre-line ">
                    {t("subTitle", { search : searchTerm })}
                </p>
            </Title>
        </div>
    )
}
import { useTranslations } from "next-intl";
import Wrapper from "@/components/wrappers/home/HomeWrapper";
import Title from "@/components/titles/HomeTitle";

export default function ArtExhitionTextBlock(){
    const t = useTranslations("artWork")

    return (
    <Wrapper className="flex flex-col items-center">
        <Title>
            <h1 className="azulPestana homeSubTitle text-center">{t("title")}</h1>
            <h2 className="text-center text-gray-400 text-xs px-5 md:px-40 md:text-[1rem]">{t("subTitle")}</h2>
        </Title>
    </Wrapper>
    )
}
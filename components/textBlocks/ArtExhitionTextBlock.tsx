import { useTranslations } from "next-intl";
import Wrapper from "@/components/wrappers/home/HomeWrapper";
import Title from "@/components/titles/HomeTitle";
import Link from "next/link";
import options from "@/data/options.json";

export default function ArtExhitionTextBlock(){
    const t = useTranslations("artExhibition")
    function getSubtitle(){
        return t.rich("subTitle", {link: (chunks) => 
        <Link  
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#38b6ff]" 
            href={options.museum}>
            {chunks}
        </Link>
        })
    }

    return (
    <Wrapper className="flex flex-col items-center">
        <Title>
            <h1 className="azulPestana homeSubTitle text-center">{t("title")}</h1>
            <h2 className="text-center text-gray-400 text-xs px-5 md:px-40 md:text-[1rem]">{getSubtitle()}</h2>
        </Title>
    </Wrapper>
    )
}
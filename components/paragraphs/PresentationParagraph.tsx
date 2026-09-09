import { useTranslations } from "next-intl";

export default function PresentationParagraph(){
    const t = useTranslations("home.primeiraSessao");

    return (
        <p className="max-w-xs md:max-w-xl text-[0.625rem] md:text-[1.125rem] text-justify text-[#b6bdc0] font-medium">{t("presentation")}</p>
    )
}
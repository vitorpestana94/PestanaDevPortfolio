import { useTranslations } from "next-intl";

export default function PresentationParagraph(){
    const t = useTranslations("home.primeiraSessao");

    return (
        <p className="max-w-xs md:max-w-xl text-xs md:text-[1.125rem] text-justify text-[#b6bdc0]">{t("presentation")}</p>
    )
}
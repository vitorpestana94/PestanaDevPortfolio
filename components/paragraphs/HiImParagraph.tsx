import { useTranslations } from "next-intl"


export default function HiImParagraph(){
    const t = useTranslations("home");
    
    return (
        <p className="text-white text-[1.5rem] sm:text-[2.5rem] md:text-[3rem] xl:text-[2.5rem] font-abril">{t("primeiraSessao.hello")}</p>
    )
}
import { useTranslations } from "next-intl";
import Link from "next/link";

export function DefaultHeaderLinks(){
    const t = useTranslations("header");

    return (
        <>
            <Link className="hoverPestana" href={"#sobre"}>
                {t("home.sobre")}
            </Link>
            <Link className="hoverPestana" href={"#minhasHabilidades"}>
                {t("home.mySkills")}
            </Link>
            <Link className="hoverPestana" href={"#meuTrabalho"}>
                {t("home.meuTrabalho")}
            </Link>
        </>
    )
}

export function NasaHeaderLinks(){
    const t = useTranslations("header");

    return (
        <>
            <Link className="hoverPestana" href={"#todayPicture"}>
                {t("nasa.today")}
            </Link>
            <Link className="hoverPestana" href={"#picturesOfTheWeek"}>
                {t("nasa.week")}
            </Link>
        </>
    )
}

export function ArtExhibitionLinks(){
    const t = useTranslations("header");

    return (
        <>
            <Link className="hoverPestana" href={"#searchArt"}>
                {t("artExhibition.search")}
            </Link>
        </>
    )
}
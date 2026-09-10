import Icon from "../icons/Icons";
import { coreTechStack, skillPerLabel } from "@/constants/skillsConstants";
import capitalizeWord from "@/utils/strings/capitalizeWord";
import { useTranslations } from "next-intl";

export default function CoreTechStackSpan(){
    const t = useTranslations("home.segundaSessao.about");

    return (
        <div className="self-start space-y-5">
            <p className="homeParagraph font-bold">{t("stack")}</p>
            <span className="grid grid-cols-4 md:grid-cols-5 gap-5 xl:flex xl:gap-x-10">
                {
                    coreTechStack.map((tech, index) => (
                        <div className="flex flex-col items-center gap-y-3" key={index}>
                            <Icon iconName={tech} className="aspect-square w-8" />
                            <p className="subTitleParagraph text-nowrap">{skillPerLabel[tech] ?? capitalizeWord(tech)}</p>
                        </div>
                    ))
                }
            </span>
        </div>
    )
}
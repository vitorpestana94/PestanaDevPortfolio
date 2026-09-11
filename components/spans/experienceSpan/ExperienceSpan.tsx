import useExperienceSpan from "./useExperienceSpan";
import ExperienceElement from "./ExperienceElement";

export default function ExperienceSpan(){
    const { years, projects, academic, t } = useExperienceSpan();

    return (
        <span className="flex gap-x-1 px-5 sm:gap-x-5 xl:gap-x-10 mt-16 xl:px-10">
            <ExperienceElement title={years} subtitle={t("years")} />
            <ExperienceElement title={projects} subtitle={t("projects")} />
            <ExperienceElement title={academic} subtitle={t("academic")} isLastElement shoulNotdAddPlus />
        </span>
    )
}
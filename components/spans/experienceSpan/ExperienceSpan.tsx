import useExperienceSpan from "./useExperienceSpan";
import ExperienceElement from "./ExperienceElement";

export default function ExperienceSpan(){
    const { years, projects, academic, t } = useExperienceSpan();

    return (
        <span className="flex justify-between">
            <ExperienceElement title={years} subtitle={t("years")} />
            <ExperienceElement title={projects} subtitle={t("projects")} />
            <ExperienceElement title={academic} subtitle={t("academic")} isLastElement shoulNotdAddPlus />
        </span>
    )
}
import useExperienceSpan from "./useExperienceSpan";
import ExperienceElement from "./ExperienceElement";

export default function ExperienceSpan(){
    const { years } = useExperienceSpan();

    return (
        <span className="flex gap-x-1 px-5 sm:gap-x-5 xl:gap-x-10 mt-16 xl:px-10">
            <ExperienceElement title={`${years}+`} subtitle={"anos de experiência"} />
            <ExperienceElement title={`12+`} subtitle={"anos de experiência"} />
            <ExperienceElement title={`2`} subtitle={"formações acadêmicas"} isLastElement />
        </span>
    )
}
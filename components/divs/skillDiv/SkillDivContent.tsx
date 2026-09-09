import { useTranslations } from "next-intl";
import Icon, { IconName } from "@/components/icons/Icons";
import { backendSkills, frontendSkills, toolsSkills, databaseSkills, skillPerLabel, skills } from "@/constants/skillsConstants";

function Skill({ skillName, percentage} : { skillName:string, percentage:number}){
    return (
        <span className="flex flex-col gap-y-2.5 text-white text-xs">
            <span className="flex w-full justify-between items-center">
                <span className="flex gap-x-3 items-center">
                    <Icon
                        iconName={skillName as IconName}
                        className="size-2 sm:size-3 lg:size-4 2xl:size-5" />
                    <p className="capitalize">{skillPerLabel[skillName] ?? skillName}</p>
                </span>
                <p>{`${percentage}%`}</p>
            </span>
            <span className="w-full bg-[#898989]/25 h-2 rounded-full">
                <span className="block bgLinear rounded-full h-2"
                style={{ width: `${percentage}%` }} />
            </span>
        </span>
    )
}

function SkillContent({ mainSkill, skills } : { mainSkill : { name: string, iconName: IconName, iconClassName?: string }, skills: {[skillName: string]: number}; }){
    return (
    <div className="flex flex-col gap-y-8 p-4 w-full">
        <span className="flex items-center gap-x-5">
            <Icon iconName={mainSkill.iconName} className={mainSkill.iconClassName ?? "aspect-square w-6 strokeAzulPestana"} />
            <p className="text-white">{mainSkill.name}</p>
        </span>
        <span className="flex flex-col gap-y-6">
           {Object.entries(skills).map(([skill, percentage], index) => (
                <Skill skillName={skill} percentage={percentage} key={index} />
            ))}
        </span>
    </div>
    )
}

export function Frontend(){
   return (
    <SkillContent 
        mainSkill={{iconName: "frontend", name: "Front-end", iconClassName: "aspect-square w-6 fillAzulPestana"}} 
        skills={frontendSkills} />
   )
}

export function Backend(){
   return (<SkillContent mainSkill={{iconName: "backend", name: "Back-end"}}  skills={backendSkills} />)
}

export function Tool(){
    const t = useTranslations("home.quartaSessao");

   return (<SkillContent mainSkill={{iconName: "tool", name: t("tools")}}  skills={toolsSkills} />)
}

export function Database(){
    const t = useTranslations("home.quartaSessao");

    return (<SkillContent mainSkill={{iconName: "database", name: t("database")}}  skills={databaseSkills} />)
}
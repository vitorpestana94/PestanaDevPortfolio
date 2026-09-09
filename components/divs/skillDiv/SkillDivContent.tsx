import { useTranslations } from "next-intl";
import Icon from "@/components/icons/Icons";
import { backendSkills, frontendSkills, toolsSkills } from "@/constants/skillsConstants";

function Skill({ skillName, percentage } : { skillName:string, percentage:number }){
    return (
        <span className="flex flex-col gap-y-1 text-white text-xs">
            <span className="flex w-full justify-between">
                <p className="capitalize">{skillName}</p>
                <p>{`${percentage}%`}</p>
            </span>
            <span className="w-full bg-[#898989]/25 h-2 rounded-full">
                <span className="block bgLinear rounded-full h-2"
                style={{ width: `${percentage}%` }} />
            </span>
        </span>
    )
}

export function Frontend(){
   return (
     <div className="flex flex-col gap-y-8 p-4 w-full">
        <span className="flex items-center gap-x-5">
            <Icon iconName="frontend" className="aspect-square w-6 fillAzulPestana" />
            <p className="text-white">Front-end</p>
        </span>
        <span className="flex flex-col gap-y-5">
           {Object.entries(frontendSkills).map(([skill, percentage], index) => (
                <Skill skillName={skill} percentage={percentage} key={index} />
            ))}
        </span>
    </div>
   )
}
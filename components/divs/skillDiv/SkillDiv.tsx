import { Frontend, Backend, Tool, Database } from "./SkillDivContent";


export type Skill = "backend" | "frontend" | "database" | "tool"

const typePerSkill: {[key in Skill]: React.ReactNode} = {
    "backend" : <Backend />,
    "frontend": <Frontend />,
    "tool": <Tool />,
    "database" : <Database />
}

export default function SkillDiv({ skill } : { skill: Skill }){
    return (
        <div className="bg-[#11182773] border border-[#38b6ff]/45 rounded-[16px] p-6">
            {typePerSkill[skill]}
        </div>
    )    
}
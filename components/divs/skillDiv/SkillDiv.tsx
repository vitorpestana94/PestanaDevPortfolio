import { Frontend } from "./SkillDivContent";

export type Skill = "backend" | "frontend" | "database" | "tools"

export default function SkillDiv({ skill } : { skill: Skill }){
    return (
        <div className="bg-[#11182773] border border-[#38b6ff]/45 rounded-[16px] p-6">
            <Frontend />
        </div>
    )    
}
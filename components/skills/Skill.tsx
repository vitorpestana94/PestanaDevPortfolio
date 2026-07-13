import Icon, { IconName } from "../icons/Icons";
import { skillPerLabel } from "@/constants/skillsConstants";

export default function Skill({ skill }: { skill: IconName }) {
   return (
      <div className="flex flex-col items-center gap-y-2 3xl:gap-y-3 pointer-events-none">
         <Icon
            iconName={skill}
            className="size-10 sm:size-12 md:size-20 2xl:size-24"
         />
         <p className="text-[0.625rem] 3xl:text-xs text-gray-500 font-medium whitespace-pre-line text-center">
            {skillPerLabel[skill]}
         </p>
      </div>
   );
}

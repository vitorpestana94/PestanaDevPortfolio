import Marquee from "react-fast-marquee";
import { skills, skillPerLabel } from "@/constants/skillsConstants";

export default function HomeMarquee() {
  return (
    <Marquee speed={50} autoFill className="border border-x-0 border-y-[#38b6ff]/45 h-15 lg:h-20 bg-[#070a10]">
      <div className="flex items-center gap-x-16 z-50">
        {
          skills.flat().map((skill, index) => (
            <span className={`flex items-center gap-x-16 text-[#bfbfbf]
              ${index === 0 ? "ml-16" : ""}`} key={index}>
              <p className="text-xs lg:text-[1rem] uppercase">{`${skillPerLabel[skill] ?? skill}`}</p>
              <p className={`text-[1.25rem]`}>•</p>
            </span>
          ))
        }
      </div>
    </Marquee>
  );
}
"use client";

import ProfilePicture from "@/components/images/ProfilePicture";
import Photo from "@/components/divs/home/SecondSession/HomePhotoDiv";
import useIsMobile from "@/hooks/useIsMobile";
import Experience from "@/components/spans/experienceSpan/ExperienceSpan";
import Links from "@/components/spans/WorkLinksSpan";

export default function ProfilePictureDivMobile(){
    const { isMobile } = useIsMobile();

    return (
    <>
        {
            isMobile && 
            <Photo className="flex flex-col items-center gap-y-10 mt-10 xl:mt-0" delay={1.5}>
                <ProfilePicture />
                <Experience />
                <Links />
            </Photo>
        }
    </>
    )
}
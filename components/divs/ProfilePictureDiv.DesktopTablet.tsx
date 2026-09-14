"use client";

import ProfilePicture from "@/components/images/ProfilePicture";
import Photo from "@/components/divs/home/SecondSession/HomePhotoDiv";
import useIsMobile from "@/hooks/useIsMobile";
import Experience from "@/components/spans/experienceSpan/ExperienceSpan";
import Links from "@/components/spans/WorkLinksSpan";

export default function ProfilePictureDivDesktopTablet(){
   const { isMobile } = useIsMobile();

    return (
    <>
        {
            !isMobile && 
            <Photo className="w-full  flex flex-col justify-around items-center">
                <ProfilePicture />
                <Experience />
                <Links />
            </Photo>
        }
    </>
    )
}
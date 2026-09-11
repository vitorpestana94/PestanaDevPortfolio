"use client";

import ProfilePicture from "@/components/images/ProfilePicture";
import Photo from "@/components/divs/home/SecondSession/HomePhotoDiv";
import useIsMobile from "@/hooks/useIsMobile";
import Experience from "@/components/spans/experienceSpan/ExperienceSpan";

export default function ProfilePictureDivMobile(){
    const { isMobile } = useIsMobile();

    return (
    <>
        {
            isMobile && 
            <Photo className="w-full my-auto mx-auto flex flex-col justify-center items-center" delay={1.5}>
                <ProfilePicture />
                <Experience />
            </Photo>
        }
    </>
    )
}
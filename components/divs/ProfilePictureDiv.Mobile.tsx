"use client";

import ProfilePicture from "@/components/images/ProfilePicture";
import Photo from "@/components/divs/home/SecondSession/HomePhotoDiv";
import useIsMobile from "@/hooks/useIsMobile";

export default function ProfilePictureDivMobile(){
    const { isMobile } = useIsMobile();

    return (
    <>
        {
            isMobile && 
            <Photo className="w-[30%] sm:w-[25%] self-center mx-auto mt-5">
                <ProfilePicture />
            </Photo>
        }
    </>
    )
}
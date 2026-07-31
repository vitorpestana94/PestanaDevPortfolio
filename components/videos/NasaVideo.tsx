import Interface from "@/components/images/NasaPictureOfTheDay/NasaPictureOfTheDayInterface";
import IFrame from "../iframes/IFrame";
import Video from "./Video";

export default function NasaVideo({ url, copyRight, isSlider, title } : Interface){
    return (
        <>
            {
                url.includes("youtube") ? 
                <IFrame url={url} title={title} copyRight={copyRight} isSlider={isSlider} /> :
                <Video url={url} title={title} copyRight={copyRight} isSlider={isSlider} />
            }
        </>
    )
}
import { NasaAstronomyPictureOfTheDayPageResponseDto } from "@/models/interfaces/dtos/responses/NasaAstronomyPictureOfTheDayPageResponseDto";
import NasaPicture from "../images/NasaPictureOfTheDay/NasaPictureOfTheDay";
import NasaVideo from "../videos/NasaVideo";

export default function NasaMedia({ data, isSlider = false } : { data: NasaAstronomyPictureOfTheDayPageResponseDto, isSlider?: boolean }){
    return (
    <>
        {
            data.media_type === "image" ? 
                <NasaPicture title={data.title} url={data.url} copyRight={data.copyright} isSlider={isSlider} /> :
                <NasaVideo url={data.url} title={data.title} copyRight={data.copyright} isSlider={isSlider} />
        }
    </>
    )
}
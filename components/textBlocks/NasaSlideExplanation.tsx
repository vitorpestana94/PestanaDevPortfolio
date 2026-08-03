import getDateAsLocaleString from "@/utils/dates/getDateAsLocaleString";

export default function NasaSlideExplanation({ explanation, date, locale} : { explanation: string, date: string, locale: string }){
    return (
        <div className="px-5 py-2 nasaBorder flex flex-col gap-y-2">
            <p className="nasaTextSlider">
                {`"${explanation}"`}
            </p>
            <p className="nasaTextSlider">
                {`— ${getDateAsLocaleString(date, locale)}`}
            </p>
        </div>
    )
}
import CheckMyProject from "../hyperLinks/CheckMyProject"
import DownloadCurriculum from "../hyperLinks/DownloadCurriculum"


export default function HeroLinks(){
    return (
        <span className="flex gap-x-4">
            <CheckMyProject />
            <DownloadCurriculum />        
        </span>
    )
}
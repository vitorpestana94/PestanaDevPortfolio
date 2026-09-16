import CheckMyProject from "../hyperLinks/CheckMyProject"
import DownloadCurriculum from "../hyperLinks/DownloadCurriculum"


export default function HeroLinks(){
    return (
        <span className="flex items-center gap-x-5">
            <CheckMyProject />
            <DownloadCurriculum />        
        </span>
    )
}
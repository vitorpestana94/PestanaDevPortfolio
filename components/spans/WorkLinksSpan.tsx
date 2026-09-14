import LinkedIn from "../hyperLinks/Linkedin";
import GitHub from "../hyperLinks/GitHub";

export default function WorkLinksSpan(){
    return (
        <span className="flex gap-x-3">
            <LinkedIn />
            <GitHub />
        </span>
    )
}
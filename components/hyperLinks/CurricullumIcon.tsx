import Icon from "../icons/Icons";
import Link from "next/link";
import { useLocale } from "next-intl";
import getCurricullumFile from "@/utils/strings/getCurricullumFile";

export default function CurricullumIcon(){
    const locale = useLocale();

    return (
    <Link href={getCurricullumFile(locale)} download>
            <Icon
            iconName="resume"
            className="homeSocialMediaIcons"
        />
    </Link>
    )
}
import { Link } from "@/i18n/routing";
import Icon from "../icons/Icons";

export default function BackToHome({buttonLabel, className}:{buttonLabel: string, className?: string}){
    return (
        <Link
            href={"/"}
            className={`select-none flex gap-x-2.5 items-center ${className}`}
        >
            <Icon
                iconName="leftArrow"
                className="fillAzulPestana aspect-square w-8"
            />
            <p className="legalDocumentParagraph">{buttonLabel}</p>
        </Link>
    )
}
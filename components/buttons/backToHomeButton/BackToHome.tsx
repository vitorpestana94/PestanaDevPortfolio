import { Link } from "@/i18n/routing";
import Icon from "../../icons/Icons";
import Interface from "./BackToHomeInterface";

export default function BackToHome({ buttonLabel, className, iconClassName, labelClassName } : Interface){
    return (
        <Link
            href={"/"}
            className={`select-none flex gap-x-2.5 items-center ${className}`}
        >
            <Icon
                iconName="leftArrow"
                className={`fillAzulPestana aspect-square w-8 ${iconClassName}`}
            />
            <p className={`legalDocumentParagraph ${labelClassName}`}>{buttonLabel}</p>
        </Link>
    )
}
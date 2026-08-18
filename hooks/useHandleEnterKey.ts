import { useEffect, RefObject } from "react";
import Interface from "./interfaces/useHandleEnterKeyInterface";

export default function useHandleEnterKey({
    enterKeyCallback,
}: Interface) {
    useEffect(() => {
        const handleEnterKeyClick = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                enterKeyCallback();
            }
        };

        document.addEventListener("keydown", handleEnterKeyClick);

        return () => {
            document.removeEventListener("keydown", handleEnterKeyClick);
        };
    }, [enterKeyCallback]);
}

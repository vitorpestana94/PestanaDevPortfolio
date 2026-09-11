import options from "data/options.json";
import { useTranslations } from "next-intl";

export default function useExperienceSpan(){
    const initialExpDate = new Date(options.experiece.initialExpDate);
    const today = new Date();
    const t = useTranslations("home.segundaSessao.experience")
 
    return { 
        years: (today.getFullYear() - initialExpDate.getFullYear()).toString(),
        projects: options.experiece.projects,
        academic: options.experiece.academic,
        t
    };
}
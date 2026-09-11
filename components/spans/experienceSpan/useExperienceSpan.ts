import options from "data/options.json";

export default function useExperienceSpan(){
    const initialExpDate = new Date(options.initialExpDate);
    const today = new Date();
 
    return { 
        years: today.getFullYear() - initialExpDate.getFullYear() 
    };
}
export default function getDateAsLocaleString(initialDate: string, locale: string){
    return getDateObject(initialDate).toLocaleDateString(locale);
}

function getDateObject(date: string){
    const [year, month, day] = date.split("-").map(Number);
    
    return new Date(year, month - 1, day);
}
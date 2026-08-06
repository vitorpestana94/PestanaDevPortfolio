
export type InitialEndDate = {
    initial: string;
    end: string;
}

export default function getNasaInitialEndDates() : InitialEndDate {
    return { initial: getSevenDaysAgo(), end: getYesterday() };
}

function getYesterday(){
    return getDay(getDate(1));
}

function getSevenDaysAgo(){
    return getDay(getDate(7));
}

function getDay(date: Date): string{
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

function getDate(daysToSubtract: number): Date{
    const date = new Date();
    date.setDate(date.getDate() - daysToSubtract);

    return date;
}
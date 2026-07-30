import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { title } from "@/constants/metaData";
import NasaAstronomyPictureOfTheDayPage from "@/components/pages/NasaAstronomyPictureOfTheDay";

export async function generateMetadata(): Promise<Metadata> {
   const t = await getTranslations(`metaData`);

   return {
      title: `${title} ${t("nasa.title")}`,
      description: t("nasa.description"),
   };
}

export default function NasaAstronomyPictureOfTheDay(){
    return <NasaAstronomyPictureOfTheDayPage />
}
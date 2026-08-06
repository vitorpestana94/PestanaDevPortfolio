import { useQuery } from "@tanstack/react-query";
import NasaService from "@/services/NasaService";

export function useGetAstronomyPictureOfTheDay(date?: string) {
  return useQuery({
    queryKey: ["getAstronomyPictureOfTheDay", date],
    queryFn: () =>
      NasaService.GetAstronomyPictureOfTheDay(date),
    retry: false,
    staleTime: 1000 * 60 * 60, // one hour cache
  });
}

export function useGetAstronomyPictureOfPeriod(startDate: string, endtDate: string) {
  return useQuery({
    queryKey: ["useGetAstronomyPictureOfPeriod", startDate, endtDate],
    queryFn: () =>
      NasaService.GetAstronomyPictureOfThePeriod(startDate, endtDate),
    retry: false,
    staleTime: 1000 * 60 * 60, // one hour cache
  });
}

import { useQuery } from "@tanstack/react-query";
import NasaService from "@/services/NasaService";

export function useGetAstronomyPictureOfTheDay(date?: string) {
  return useQuery({
    queryKey: ["getAstronomyPictureOfTheDay", date],
    queryFn: () =>
      NasaService.GetAstronomyPictureOfTheDay(date),
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });
}

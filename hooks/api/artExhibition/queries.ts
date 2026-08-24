import { useQuery } from "@tanstack/react-query";
import ArtExhibitionService from "@/services/ArtExhibitionService";

export function useGetArts(search: string) {
  return useQuery({
    queryKey: ["getArts", search],
    queryFn: () =>
      ArtExhibitionService.GetArts(search),
    retry: false,
    staleTime: 1000 * 60 * 15,
    meta: {
      skipGlobalErrorHandler: true,
    },
  });
}

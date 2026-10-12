import { useQuery } from "@tanstack/react-query";
import BoardService from "@/services/BoardService";

export function useGetBoards() {
   return useQuery({
      queryKey: ["getBoards"],
      queryFn: () => BoardService.GetBoards(),
      retry: false,
      staleTime: 1000 * 60 * 5,
   });
}

export function useGetBoard(boardId: string, enabled: boolean = true) {
   return useQuery({
      queryKey: ["getBoard", boardId],
      queryFn: () => BoardService.GetBoard(boardId),
      enabled: enabled,
      retry: false,
      staleTime: 1000 * 60 * 5,
   });
}

export function useGetBoardMembers(boardId: string, enabled: boolean = true) {
   return useQuery({
      queryKey: ["getBoardMembers", boardId],
      queryFn: () => BoardService.GetBoardMembers(boardId),
      enabled: enabled,
      retry: false,
      staleTime: 1000 * 60 * 5,
   });
}

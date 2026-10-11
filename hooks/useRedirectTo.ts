import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export function useRedirectTo() {
  const searchParams = useSearchParams();
  const [redirectTo, setRedirectTo] = useState<string>("/");
  const boardId = searchParams.get("boardId");

  useEffect(() => {
    const redirect = searchParams.get("redirectTo");

    // Users invited to a scrum board accept the invitation when the board is opened.
    if (boardId) {
      setRedirectTo(`scrum-board/${boardId}?acceptInvitation=true`);
    } else if (redirect) {
      setRedirectTo(redirect);
    }
  }, [searchParams]);

  return { redirectTo, boardId };
}

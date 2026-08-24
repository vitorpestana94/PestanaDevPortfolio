import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export function useRedirectTo() {
  const searchParams = useSearchParams();
  const [redirectTo, setRedirectTo] = useState<string>("/");

  useEffect(() => {
    const redirect = searchParams.get("redirectTo");

    if (redirect) {
      setRedirectTo(redirect);
    }
  }, [searchParams]);

  return { redirectTo };
}
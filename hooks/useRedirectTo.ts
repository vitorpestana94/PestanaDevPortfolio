import { useEffect, useState } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

function getRedirectTo(
  searchParams: URLSearchParams,
  router: AppRouterInstance,
  path: string
): string {
  const redirectTo = searchParams.get("redirectTo");

  router.replace(`${path}`);

  return redirectTo ?? "";
}

export function useRedirectTo() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [redirectTo, setRedirectTo] = useState<string>("/");

  useEffect(() => {
    const redirect = getRedirectTo(searchParams, router, pathName);

    if (redirect) {
      setRedirectTo(`/${redirect}`);
    }
  }, []);

  return { redirectTo };
}

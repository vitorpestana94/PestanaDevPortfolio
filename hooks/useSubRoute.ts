"use client";

import { usePathname } from "next/navigation";

export default function useSubRoute(subRoutePath?: number) {
   const pathname = usePathname();
   const subRoute = pathname.split("/")[subRoutePath ?? 3];

   return { subRoute };
}

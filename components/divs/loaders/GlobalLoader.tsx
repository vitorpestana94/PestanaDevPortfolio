import { useEffect, useRef, useState } from "react";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function GlobalLoader({
   loadingMessage,
}: {
   loadingMessage: string;
}) {
   const isFetching = useIsFetching();
   const isMutating = useIsMutating();

   const toastId = useRef<string | number | null>(null);

   useEffect(() => {
      const loading = isFetching > 0 || isMutating > 0;

      if (loading && !toastId.current) {
         toastId.current = toast.loading(loadingMessage, {
            style: {
               backgroundColor: "#38b6ff",
               color: "#ffff",
            },
         });
      }

      if (!loading && toastId.current) {
         setTimeout(() => {
            if (!loading) {
               toast.dismiss(toastId.current!);
               toastId.current = null;
            }
         }, 500);
      }
   }, [isFetching, isMutating]);

   return null;
}

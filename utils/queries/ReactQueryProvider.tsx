"use client";

import { toastError } from "../errors/toastHandlers";
import {
   QueryClient,
   QueryClientProvider,
   QueryCache,
   MutationCache,
} from "@tanstack/react-query";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import {
   errorObjectMessageHandler,
   getErrorMessage,
} from "../errors/errorMessagesHandlers";
import { useTranslations } from "next-intl";

interface Props {
   children: React.ReactNode;
}
/**
 * Provides react query client and devtools. Working on client side, so must be
 * created in that component and wrap the app
 * */
export default function ReactQueryProvider({ children }: Props) {
   const t = useTranslations();
   const errorMessage = `${t("error.ops")} ${t("error.something")}`;
   const [queryClient] = useState(
      () =>
         new QueryClient({
            defaultOptions: {
               queries: {
                  staleTime: 3600000, // 1 hour
                  retry: 3, // will retry 3 times before failing
                  refetchOnWindowFocus: false,
               },
            },
            queryCache: new QueryCache({
               onError: (_) => {
                  toastError(errorMessage);
               },
            }),
            mutationCache: new MutationCache({
               onError: (_) => {
                  toastError(errorMessage);
               },
            }),
         }),
   );
   return (
      <QueryClientProvider client={queryClient}>
         <ToastContainer />
         {children}
      </QueryClientProvider>
   );
}

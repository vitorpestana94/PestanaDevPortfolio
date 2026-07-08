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
import { getErrorCode } from "../errors/errorMessagesHandlers";
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

   const getErrorMessage = (message: string) => {
      const errorMessage = t(`error.${getErrorCode(message)}`);

      return errorMessage !== undefined
         ? errorMessage
         : `${t("error.ops")} ${t("error.something")}`;
   };

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
               onError: (error) => {
                  toastError(getErrorMessage(error.message));
               },
            }),
            mutationCache: new MutationCache({
               onError: (error) => {
                  toastError(getErrorMessage(error.message));
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

"use client";
import {
   QueryClient,
   QueryClientProvider,
   QueryCache,
} from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

interface Props {
   children: React.ReactNode;
}
/**
 * Provides react query client and devtools. Working on client side, so must be
 * created in that component and wrap the app
 * */
export default function ReactQueryProvider({ children }: Props) {
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
                  toast.error("teste");
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

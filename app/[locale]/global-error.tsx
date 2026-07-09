/* eslint-disable @eslint-react/no-serializable-props */

"use client";

import ErrorModal from "@/components/modals/ErrorModal";
export default function GlobalError({
   reset,
}: {
   error: Error & { digest?: string };
   reset: () => void;
}) {
   return (
      <html>
         <body>
            <ErrorModal action={reset} />
         </body>
      </html>
   );
}

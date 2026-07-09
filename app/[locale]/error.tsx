"use client";

import * as React from "react";

import ErrorModal from "@/components/modals/ErrorModal";

export default function RootError({
   reset,
}: {
   error: Error & { digest?: string };
   reset: () => void;
}) {
   return <ErrorModal action={reset} />;
}

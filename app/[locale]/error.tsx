"use client";

import * as React from "react";

import ErrorModal from "@/components/pages/Error";

export default function RootError({
   reset,
}: {
   error: Error & { digest?: string };
   reset: () => void;
}) {
   return <ErrorModal action={reset} />;
}

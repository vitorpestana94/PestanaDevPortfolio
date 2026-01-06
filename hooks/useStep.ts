"use client";

import { useState } from "react";

export default function useHandleStep({ maxSteps }: { maxSteps?: number } = { maxSteps: 4 }) {
    const [step, setStep] = useState(1);

    function nextStep() {
        setStep((prevStep) => Math.min(prevStep + 1, maxSteps || 4));
    }

    function previousStep() {
        setStep((prevStep) => Math.max(prevStep - 1, 1));
    }

    return { step, nextStep, previousStep, setStep };
}
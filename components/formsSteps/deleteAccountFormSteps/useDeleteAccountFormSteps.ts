import useHandleStep from "@/hooks/useStep";

export default function useDeleteAccountFormSteps() {
   const { step, nextStep } = useHandleStep();

   return { step, nextStep };
}

import { useState } from "react";
import useStepInterface from "@/models/interfaces/UI/useStepInterface";

export default function useDeleteAccountFirstStep({
   nextStep,
}: useStepInterface) {
   const [deleteConfirmationWasNotClicked, setDeleteConfirmationWasNotClicked] =
      useState<boolean>(true);

   function handleDeleteClick() {
      setDeleteConfirmationWasNotClicked(!deleteConfirmationWasNotClicked);
   }

   async function submit(): Promise<void> {
      if (!deleteConfirmationWasNotClicked) {
         nextStep!();
      }
   }

   return { deleteConfirmationWasNotClicked, handleDeleteClick, submit };
}

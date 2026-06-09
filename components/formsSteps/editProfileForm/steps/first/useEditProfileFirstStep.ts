import ChangeUserDataRequestDto from "@/models/interfaces/dtos/requests/ChangeUserDataRequestDto";
import { useState, useEffect } from "react";
import useHandleStep from "@/hooks/useStep";
import { useChangeUserData } from "@/hooks/api/user/mutations";
import { useSendConfirmationCodeEmail } from "@/hooks/api/email/mutation";
import { useLocale } from "next-intl";
import { ConfirmationCodeEmailKind } from "@/models/enums/CofirmationCodeEmailKind";
import Interface from "./EditProfileFirstStepInterface";

export default function useEditProfileFirstStep({
   nextStep,
   setIsUpdateEmail,
}: Interface) {
   const locale = useLocale();

   const { mutateAsync, isError, isPending, isSuccess } = useChangeUserData();

   const {
      mutateAsync: sendConfirmatiomCode,
      isError: isSendConfirmatiomCodeError,
      isSuccess: isSendConfirmatiomCodeSuccess,
      isPending: isSendingConfirmationCode,
   } = useSendConfirmationCodeEmail();

   const [request, setRequest] = useState<ChangeUserDataRequestDto>({
      email: undefined,
      name: undefined,
   });

   const [dataNotChanged, setDataNotChanged] = useState<boolean | null>(null);

   function setEmail(newEmail: string) {
      setRequest((previous) => ({ ...previous, email: newEmail }));
   }

   function setName(newName: string) {
      setRequest((previous) => ({ ...previous, name: newName }));
   }

   async function submit(): Promise<void> {
      if (dataNotChanged === null) return;

      if (isPending || isSendingConfirmationCode) return;

      if (request.email === undefined || request.name === undefined) {
         setDataNotChanged(true);
      } else {
         setDataNotChanged(false);
      }

      if (request.email) {
         await sendConfirmatiomCode({
            clientEmail: request.email,
            clientLocale: locale,
            confirmationCodeEmailType:
               ConfirmationCodeEmailKind.CredentialsChange,
         });
      } else {
         if (!dataNotChanged) {
            setIsUpdateEmail(true);

            await mutateAsync(request);
         }
      }
   }

   useEffect(() => {
      if (isSuccess || isSendConfirmatiomCodeSuccess) {
         nextStep();
      }
   }, [isSuccess, isSendConfirmatiomCodeSuccess]);

   useEffect(() => {
      setDataNotChanged(request.email === null || request.name === null);
   }, [request]);

   return {
      dataNotChanged,
      isLoading: isPending || isSendingConfirmationCode,
      setEmail,
      setName,
      submit,
   };
}

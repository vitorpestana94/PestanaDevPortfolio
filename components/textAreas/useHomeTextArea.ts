import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FocusEvent } from "react";

export default function useHomeTextArea(
  setIsFormWithError: React.Dispatch<React.SetStateAction<boolean>>
) {
  const t = useTranslations();
  const [isTextAreaEmpty, setIsTextAreaEmpty] = useState<boolean>(false);

  function verifyTextArea(event: FocusEvent<HTMLTextAreaElement>) {
    const text: string = event.target.value;

    setIsTextAreaEmpty(text ? false : true);
  }

  useEffect(() => {
    setIsTextAreaEmpty(isTextAreaEmpty);
  }, [isTextAreaEmpty]);

  return { t, isTextAreaEmpty, verifyTextArea };
}

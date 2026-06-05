import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { FormType } from "@/components/sections/Auth/useAuthSection";

export default function useAuthDivBg(formType: FormType) {
   const [flow, setFlow] = useState<string>(formType);
   const t = useTranslations();

   useEffect(() => {
      setFlow(formType);
   }, [formType]);

   return { flow, t };
}

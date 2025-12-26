import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

export default function useAuthDivBg(isLogin: boolean) {
  const login: string = "login";
  const signUp: string = "signUp";

  const [flow, setFlow] = useState<string>(isLogin ? login : signUp);
  const t = useTranslations();

  useEffect(() => {
    setFlow(isLogin ? login : signUp);
  }, [isLogin]);

  return { flow, t };
}

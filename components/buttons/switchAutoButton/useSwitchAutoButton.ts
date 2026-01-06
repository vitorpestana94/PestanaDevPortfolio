import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function useSwitchAutoButton(isLogin: boolean) {
  const t = useTranslations("auth.switchButton");
  const activeStyle: string = "bg-[#38b6ff] text-white";
  const inactiveStyle: string = "text-white";
  const [loginStyle, setLoginStyle] = useState<string>(activeStyle);
  const [signUpStyle, setSignUpsStyle] = useState<string>(inactiveStyle);

  useEffect(() => {
    setLoginStyle(isLogin ? activeStyle : inactiveStyle);
    setSignUpsStyle(!isLogin ? activeStyle : inactiveStyle);
  }, [isLogin]);

  return {
    t,
    inactiveStyle,
    activeStyle,
    loginStyle,
    signUpStyle,
  };
}

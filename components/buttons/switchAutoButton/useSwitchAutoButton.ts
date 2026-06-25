import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import useSubRoute from "@/hooks/useSubRoute";

export default function useSwitchAutoButton() {
   const login = "login";
   const signUp = "sign-up";
   const t = useTranslations("auth.switchButton");
   const { subRoute } = useSubRoute();

   const activeStyle: string = "bg-[#38b6ff] text-white";
   const inactiveStyle: string = "text-white";

   const [isLogin, setIsLogin] = useState(subRoute === login);

   const getLoginStyle = () => (isLogin ? activeStyle : inactiveStyle);
   const getSignUpStyle = () => (!isLogin ? activeStyle : inactiveStyle);

   const [loginStyle, setLoginStyle] = useState<string>(getLoginStyle());
   const [signUpStyle, setSignUpsStyle] = useState<string>(getSignUpStyle());

   function switchAuth() {
      setIsLogin((prev) => !prev);
   }

   useEffect(() => {
      setLoginStyle(getLoginStyle());
      setSignUpsStyle(getSignUpStyle());
   }, [isLogin]);

   return {
      t,
      loginHref: loginStyle === activeStyle ? signUp : login,
      signUpHref: signUpStyle === activeStyle ? login : signUp,
      switchAuth,
      inactiveStyle,
      activeStyle,
      loginStyle,
      signUpStyle,
   };
}

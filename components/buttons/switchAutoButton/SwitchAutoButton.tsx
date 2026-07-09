"use client";

import useSwitchAutoButton from "./useSwitchAutoButton";
import Button from "../loginSignUpButton/LoginSingnUpButton";

export default function SwitchAutoButton({ hide = false }: { hide?: boolean }) {
   const { loginHref, signUpHref, loginStyle, signUpStyle, t, switchAuth } =
      useSwitchAutoButton();

   return (
      <div
         className={`navSwitchPosition flex rounded-2xl p-1 text-black bg-gray-800
         text-[0.5rem] w-[25%] z-50
         sm:text-[0.625rem]
         md:text-[0.75rem] md:min-h-9
         lg:w-[30%] lg:min-w-[28.75] 
         ${hide ? "invisible" : ""}`}
      >
         <Button
            href={signUpHref}
            buttonLabel={t("signUp")}
            buttonStyle={signUpStyle}
            buttonClick={switchAuth}
         />
         <Button
            href={loginHref}
            buttonLabel={t("login")}
            buttonStyle={loginStyle}
            buttonClick={switchAuth}
         />
      </div>
   );
}

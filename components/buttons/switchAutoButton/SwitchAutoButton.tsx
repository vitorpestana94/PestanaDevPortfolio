import useSwitchAutoButton from "./useSwitchAutoButton";
import SwitchAutoButtonInterface from "./SwitchAutoButtonInterface";
import Button from "../loginSignUpButton/LoginSingnUpButton";

export default function SwitchAutoButton({
   isLogin,
   switchAuth,
}: SwitchAutoButtonInterface) {
   const { loginStyle, signUpStyle, t } = useSwitchAutoButton(isLogin);

   return (
      <div
         className="navSwitchPosition flex rounded-2xl p-1 text-black bg-gray-800
         text-[0.5rem] w-[25%] z-50
         sm:text-[0.625rem]
         md:text-[0.75rem]
         lg:w-[10%] lg:min-w-[28.75] lg:min-h-[8.5]"
      >
         <Button
            buttonLabel={t("signUp")}
            buttonStyle={signUpStyle}
            buttonClick={switchAuth}
         />
         <Button
            buttonLabel={t("login")}
            buttonStyle={loginStyle}
            buttonClick={switchAuth}
         />
      </div>
   );
}

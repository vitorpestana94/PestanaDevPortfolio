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
      className="absolute z-50 flex rounded-2xl p-1
    w-[25%] h-[3.5%] top-[40%] sm:top-[2%] sm:w-[10%] sm:h-[7%] xl:h-[5%] text-black
    right-[3%] sm:right-[0.5%] bg-gray-800 
    text-[0.5rem]
    sm:text-[0.75rem]"
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

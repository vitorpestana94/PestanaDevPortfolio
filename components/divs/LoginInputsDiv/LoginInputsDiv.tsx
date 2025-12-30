import Email from "@/components/inputs/LoginEmailFormInput/LoginEmailFormInput";
import Password from "../../inputs/LoginPasswordFormInput/LoginPasswordFormInput";
import LoginButton from "../../buttons/authButton/AuthButton";
import useLoginInputsDiv from "./useLoginInputsDiv";
import Error from "@/components/errors/error/Error";
import { handleGoogleSignIn } from "@/utils/authentication/googleAuth";

export default function loginInputsDiv() {
  const {
    formErros,
    t,
    setEmailError,
    setPasswordError,
    setEmail,
    submit,
    setPassword,
  } = useLoginInputsDiv();

  return (
    <div className="flex flex-col gap-y-6 items-center w-[70%] sm:w-[60%]">
      <button
        onClick={() => {
          handleGoogleSignIn("/", "en");
        }}
        type="button"
        className="bg-black text-white"
      >
        Logar com google
      </button>
      <div className="w-full flex flex-col gap-y-2 ">
        <Email setEmailError={setEmailError} setEmail={setEmail} />
        <span className="w-full flex flex-col gap-y-2">
          <Password
            isInputWithError={formErros.password}
            setPasswordError={setPasswordError}
            setPassword={setPassword}
          />
          <p className="ml-auto text-[0.5rem] cursor-pointer hover:text-[#30b6ff]">
            {t("auth.login.form.forgot")}
          </p>
        </span>
        {
          <Error
            shouldRender={formErros.invalidCredentials}
            message={t("auth.login.form.errors.invalidCredentials")}
            styles="self-start"
          />
        }
      </div>
      <LoginButton
        isLoginFormWithErrors={formErros.email || formErros.email}
        submit={submit}
      />
    </div>
  );
}

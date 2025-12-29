import Email from "../../inputs/LoginEmailFormInput/LoginEmailFormInput";
import Password from "../../inputs/LoginPasswordFormInput/LoginPasswordFormInput";
import LoginButton from "../../buttons/authButton/AuthButton";
import useLoginInputsDiv from "./useLoginInputsDiv";
import Error from "@/components/errors/error/Error";

export default function loginInputsDiv() {
  const { loginRequest, formErros, setEmail, submit, setPassword } =
    useLoginInputsDiv();

  return (
    <div className="flex flex-col gap-y-6 items-center w-[70%] sm:w-[60%]">
      <div className="w-full flex flex-col gap-y-2 ">
        <Email
          email={loginRequest.email}
          isInputWithError={formErros.email}
          setEmail={setEmail}
        />
        <span className="w-full flex flex-col gap-y-2">
          <Password
            isInputWithError={formErros.password}
            setPassword={setPassword}
          />
          <p className="ml-auto text-[0.5rem]">forgot password?</p>
        </span>
        {
          <Error
            shouldRender={formErros.invalidCredentials}
            message="teste1234"
            styles="self-start"
          />
        }
      </div>
      <LoginButton submit={submit} />
    </div>
  );
}

import Icon from "../../icons/Icons";
import useLoginPasswordFormInput from "./useLoginPasswordFormInput";
import LoginPasswordFormInputInterface from "./LoginPasswordFormInputInterface";
import Error from "@/components/errors/error/Error";

export default function LoginPasswordFormInput({
  setPassword,
  isInputWithError,
}: LoginPasswordFormInputInterface) {
  const { t, eye, eyeOn, switchEye } = useLoginPasswordFormInput();

  return (
    <div className="flex flex-col">
      <div className="loginInputsDivs flex justify-between items-center px-4">
        <Icon
          iconName="padlock"
          className="aspect-square w-[10%] max-w-4 shrink-0 strokeAzulPestana"
        />
        <input
          type={eye === eyeOn ? "password" : "text"}
          placeholder={t("auth.login.form.password")}
          className={`loginInputs mx-2`}
          name={"password"}
          autoComplete={"current-password"}
          onChange={(event) => setPassword(event.target.value)}
        />
        <span onClick={() => switchEye()}>
          <Icon
            iconName={eye}
            className="aspect-square w-4 shrink-0 strokeAzulPestana cursor-pointer"
          />
        </span>
      </div>
      <Error
        shouldRender={isInputWithError ?? false}
        message={t("auth.login.form.errors.password")}
      />
    </div>
  );
}

import Icon from "../../icons/Icons";
import useLoginPasswordFormInput from "./useLoginPasswordFormInput";
import LoginPasswordFormInputInterface from "./LoginPasswordFormInputInterface";
import Error from "@/components/errors/error/Error";

export default function LoginPasswordFormInput({
  setPassword,
  setPasswordError,
}: LoginPasswordFormInputInterface) {
  const { t, isPasswordEmpty, eye, eyeOn, switchEye, verifyPassword } =
    useLoginPasswordFormInput({
      setPasswordError,
    });

  return (
    <div className="flex flex-col">
      <div className="loginInputsDivs flex justify-between items-center px-4">
        <Icon
          iconName="padlock"
          className="aspect-square w-[10%] max-w-4 shrink-0 strokeAzulPestana"
        />
        <input
          onBlur={(event) => verifyPassword(event)}
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
        shouldRender={isPasswordEmpty}
        message={t("auth.login.form.errors.password")}
      />
    </div>
  );
}

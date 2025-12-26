import Icon from "../../icons/Icons";
import useLoginPasswordFormInput from "./useLoginPasswordFormInput";

export default function LoginPasswordFormInput() {
  const { t, eye, eyeOn, switchEye } = useLoginPasswordFormInput();

  return (
    <div className="loginInputs">
      <Icon
        iconName="padlock"
        className="aspect-square w-[10%] ml-2.5 mr-2 strokeAzulPestana"
      />
      <input
        type={eye === eyeOn ? "password" : "text"}
        placeholder={t("auth.login.form.password")}
        className={`focus:outline-none text-[0.75rem]`}
        name={"password"}
        autoComplete={"current-password"}
      />
      <span onClick={() => switchEye()}>
        <Icon
          iconName={eye}
          className="aspect-square w-[10%] ml-2 mr-4 fillAzulPestana cursor-pointer"
        />
      </span>
    </div>
  );
}

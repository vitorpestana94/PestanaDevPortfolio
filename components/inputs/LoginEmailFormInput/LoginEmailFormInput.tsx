import Profile from "../../icons/Icons";
import LoginEmailFormInputInterface from "./LoginEmailFormInputInterface";
import Error from "@/components/errors/error/Error";
import useLoginEmailFormInput from "./useLoginEmailFormInput";

export default function LoginEmailFormInput({
  setEmail,
  setEmailError,
}: LoginEmailFormInputInterface) {
  const {
    getErrorMessage,
    verifyEmail,
    t,
    isEmailEmpty,
    isEmailFormatInvalid,
  } = useLoginEmailFormInput({
    setEmailError,
  });

  return (
    <div className="flex flex-col">
      <div className="loginInputsDivs">
        <Profile
          iconName="profile"
          className="aspect-square w-4 strokeAzulPestana mr-2"
        />
        <input
          onBlur={(event) => {
            verifyEmail(event);
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
          type={"email"}
          placeholder={t("auth.login.form.name")}
          className={`mr-6 loginInputs`}
          name={"email"}
          autoComplete={"username"}
        />
      </div>
      <Error
        shouldRender={isEmailEmpty || isEmailFormatInvalid}
        message={getErrorMessage()}
      />
    </div>
  );
}

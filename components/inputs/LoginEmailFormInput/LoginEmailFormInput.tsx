import Profile from "../../icons/Icons";
import { useTranslations } from "next-intl";
import LoginEmailFormInputInterface from "./LoginEmailFormInput";
import Error from "@/components/errors/error/Error";

export default function LoginEmailFormInput({
  isInputWithError,
  email,
  setEmail,
}: LoginEmailFormInputInterface) {
  const t = useTranslations();

  return (
    <div className="flex flex-col">
      <div className="loginInputsDivs">
        <Profile
          iconName="profile"
          className="aspect-square w-4 strokeAzulPestana mr-2"
        />
        <input
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
        shouldRender={isInputWithError ?? false}
        message={
          email
            ? t("auth.login.form.errors.emailFormat")
            : t("auth.login.form.errors.email")
        }
      />
    </div>
  );
}

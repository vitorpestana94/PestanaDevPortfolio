import Profile from "../icons/Icons";
import { useTranslations } from "next-intl";

export default function LoginEmailFormInput() {
  const t = useTranslations();

  return (
    <div className="loginInputs">
      <Profile
        iconName="profile"
        className="aspect-square w-[8%] sm:w-[5%] fillAzulPestana ml-4 mr-2"
      />
      <input
        type={"email"}
        placeholder={t("auth.login.form.name")}
        className={`focus:outline-none text-[0.75rem]`}
        name={"email"}
        autoComplete={"username"}
      />
    </div>
  );
}

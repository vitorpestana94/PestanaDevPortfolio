import Profile from "../../icons/Icons";
import Error from "@/components/errors/error/Error";
import EmailInputInterface from "./EmailInputIntertace";

export default function EmailInput({
  verifyEmail,
  setEmail,
  getErrorMessage,
  shoudlRenderError,
  emailInputPlaceHolder,
}: EmailInputInterface) {
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
          placeholder={emailInputPlaceHolder}
          className={`mr-6 loginInputs`}
          name={"email"}
          autoComplete={"username"}
        />
      </div>
      <Error shouldRender={shoudlRenderError} message={getErrorMessage()} />
    </div>
  );
}

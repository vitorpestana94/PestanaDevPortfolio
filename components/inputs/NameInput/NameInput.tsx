import Interface from "./NameInputInterface";
import Profile from "../../icons/Icons";
import Error from "@/components/errors/error/Error";

export default function NameInput({ placeholder, setName }: Interface) {
  return (
    <div className="flex flex-col">
      <div className="loginInputsDivs">
        <Profile
          iconName="profile"
          className="aspect-square w-4 strokeAzulPestana mr-2"
        />
        <input
          onBlur={(event) => {}}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
          type={"text"}
          placeholder={placeholder}
          className={`mr-6 loginInputs`}
          name={"name"}
        />
      </div>
      <Error shouldRender={false} message={""} />
    </div>
  );
}

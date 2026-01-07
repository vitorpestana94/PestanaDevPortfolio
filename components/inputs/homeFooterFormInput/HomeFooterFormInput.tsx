import InputInterface from "../InputInterface";
import Error from "../../errors/error/Error";
import useHomeFooterFormInput from "./useHomeFooterFormInput";

export default function HomeFooterFormInput({ props }: InputInterface) {
  const isEmailInput: boolean = props.name === "email";
  const {
    isNameEmpty,
    isEmailEmpty,
    isEmailFormatInvalid,
    verifyEmail,
    t,
    verifyName,
    getErrorMessage,
  } = useHomeFooterFormInput();

  return (
    <>
      <input
        onChange={(event) => props.setFormData(event.target.value)}
        type={props.type}
        onBlur={isEmailInput ? verifyEmail : verifyName}
        placeholder={props.placeHolder}
        className={`py-1 focus:outline-none border-b text-[0.5rem] text-center sm:text-right 
        placeholder:text-center sm:placeholder:text-right autofill:shadow-[0_0_0px_1000px_#2c2c2c_inset]
        autofill:[-webkit-text-fill-color:white]
        border-b-[#808080] text-white ${props.styles}`}
        name={props.name}
        autoComplete={isEmailInput ? "username" : "off"}
      />
      {isEmailInput ? (
        <Error
          styles=" !text-[0.5rem]"
          shouldRender={isEmailEmpty || isEmailFormatInvalid}
          message={getErrorMessage()}
        />
      ) : (
        <Error
          styles=" !text-[0.5rem]"
          shouldRender={isNameEmpty}
          message={t("home.quartaSessao.form.errors.name")}
        />
      )}
    </>
  );
}

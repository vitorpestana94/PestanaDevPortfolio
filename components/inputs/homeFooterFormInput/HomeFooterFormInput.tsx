import InputInterface from "./HomeFooterFormInputInterface";
import Error from "../../errors/error/Error";
import useHomeFooterFormInput from "./useHomeFooterFormInput";

export default function HomeFooterFormInput({
   type,
   props,
   register,
   errors,
}: InputInterface) {
   const isEmailInput: boolean = type === "clientEmail";
   const { emailRequired, nameRequired, verifyEmail, verifyName } =
      useHomeFooterFormInput();

   return (
      <>
         <input
            type={props.type}
            {...register!(type, {
               required: isEmailInput ? emailRequired : nameRequired,
               validate: (value) =>
                  isEmailInput ? verifyEmail(value) : verifyName(value),
            })}
            onBlur={isEmailInput ? verifyEmail : verifyName}
            placeholder={props.placeHolder}
            className={`py-1 focus:outline-none border-b text-[0.5rem] text-center sm:text-right 
            placeholder:text-center sm:placeholder:text-right autofill:shadow-[0_0_0px_1000px_#2c2c2c_inset]
            autofill:[-webkit-text-fill-color:white]
            border-b-[#808080] text-white ${props.styles}`}
            autoComplete={isEmailInput ? "username" : "off"}
         />
         <Error
            styles=" !text-[0.5rem]"
            shouldRender={
               errors?.clientEmail?.message !== undefined ||
               errors?.clientName?.message !== undefined
            }
            message={
               isEmailInput
                  ? (errors?.clientEmail?.message as string)
                  : (errors?.clientName?.message as string)
            }
         />
      </>
   );
}

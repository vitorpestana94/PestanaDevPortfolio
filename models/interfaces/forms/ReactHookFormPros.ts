import {
   UseFormRegister,
   UseFormHandleSubmit,
   FieldErrors,
} from "react-hook-form";

export default interface ReactHookFormPros {
   errors?: FieldErrors<any>;
   register?: UseFormRegister<any>;
   handleSubmit?: UseFormHandleSubmit<any, any>;
}

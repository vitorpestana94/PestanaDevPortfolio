import { ReactNode } from "react";
import {
   FieldValues,
   SubmitHandler,
   UseFormHandleSubmit,
} from "react-hook-form";

export default interface DefaultFormInterface<T extends FieldValues> {
   children: ReactNode;
   className?: string;
   onSubmit: SubmitHandler<T>;
   handleSubmit: UseFormHandleSubmit<T>;
}

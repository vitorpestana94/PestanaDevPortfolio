import { ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";

export default interface DefaultFormInterface<T> {
   children: ReactNode;
   className: string;
   onSubmit: SubmitHandler<T>;
}

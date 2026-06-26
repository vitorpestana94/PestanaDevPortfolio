import { useForm, FieldValues } from "react-hook-form";
import Interface from "./DefaultFormInterface";

export default function DefaultForm<T extends FieldValues>({
   className,
   children,
   onSubmit,
}: Interface<T>) {
   const { handleSubmit } = useForm<T>();

   return (
      <form className={className} onSubmit={handleSubmit(onSubmit)}>
         {children}
      </form>
   );
}

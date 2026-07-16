import { FieldValues } from "react-hook-form";
import Interface from "./DefaultFormInterface";

export default function DefaultForm<T extends FieldValues>({
   className,
   children,
   handleSubmit,
   onSubmit,
}: Interface<T>) {
   return (
      <form
         className={`bg-inherit ${className}`}
         onSubmit={handleSubmit(onSubmit)}
      >
         {children}
      </form>
   );
}

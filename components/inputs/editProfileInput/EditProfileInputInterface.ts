import InputInterface from "../InputInterface";
import ReactHookFormPros from "@/models/interfaces/forms/ReactHookFormPros";

export type AutoCompleteType = "name" | "password" | "off" | "email";
type EditType = "email" | "name";

export default interface EditProfileInputInterface
   extends InputInterface, ReactHookFormPros {
   label: string;
   autoCompleteType?: AutoCompleteType;
   type: EditType;
}

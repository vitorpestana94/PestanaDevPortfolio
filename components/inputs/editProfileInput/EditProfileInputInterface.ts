import InputInterface from "../InputInterface";

export type AutoCompleteType = "name" | "password" | "off" | "email";

export default interface EditProfileInputInterface extends InputInterface {
   label: string;
   autoCompleteType?: AutoCompleteType;
}

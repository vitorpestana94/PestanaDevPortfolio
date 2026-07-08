import InputInterface from "../InputInterface";

type InputFormDataType = "clientEmail" | "clientName" | "clientMessage";

export default interface HomeFooterFormInputInterface extends InputInterface {
   type: InputFormDataType;
}

import ReactHookFormPros from "@/models/interfaces/forms/ReactHookFormPros";

export default interface InputInterface extends ReactHookFormPros {
   props: {
      type: string;
      placeHolder: string;
      styles?: string;
   };
}

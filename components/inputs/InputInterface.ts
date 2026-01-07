export default interface InputInterface {
  props: {
    type: string;
    placeHolder: string;
    name: string;
    styles?: string;
    setFormData: (data: string) => void;
    setIsFormWithError: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

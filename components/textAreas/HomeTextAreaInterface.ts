export default interface HomeTextAreaInterface {
  placeHolder: string;
  setFormData: (data: string) => void;
  setIsFormWithError: React.Dispatch<React.SetStateAction<boolean>>;
}

import { Dispatch, SetStateAction } from "react";

export default interface useRequestProps {
  setError?: Dispatch<SetStateAction<boolean>>;
  setLoading?: Dispatch<SetStateAction<boolean>>;
  setErrorMessage?: Dispatch<SetStateAction<string>>;
  isError?: boolean;
  isLoading?: boolean;
  errorMessage?: string;
}

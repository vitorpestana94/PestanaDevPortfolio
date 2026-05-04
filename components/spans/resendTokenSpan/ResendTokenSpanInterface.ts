import useRequestProps from "@/models/interfaces/UI/useRequestProps";

export default interface ResendTokenSpan extends useRequestProps {
  email: string;
}

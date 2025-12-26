import InputInterface from "./InputInterface";

export default function HomeFooterFormInput({ props }: InputInterface) {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeHolder}
        className={`py-1 focus:outline-none border-b text-[0.5rem] placeholder:text-center sm:placeholder:text-right
        border-b-[#808080] text-white ${props.styles}`}
        name={props.name}
        autoComplete={props.name === "email" ? "username" : "off"}
      />
    </>
  );
}

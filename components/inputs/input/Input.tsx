import InputInterface from "./InputInterface";

export default function Input({ props }: InputInterface) {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeHolder}
        className={`py-1 focus:outline-none border-b text-[0.5rem] 
        border-b-[#808080] text-white ${props.styles}`}
        name={props.name}
        autoComplete={props.name === "email" ? "username" : "off"}
      />
    </>
  );
}

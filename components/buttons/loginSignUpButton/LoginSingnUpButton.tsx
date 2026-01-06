import LoginSingnUpButtonInterface from "./LoginSingnUpButtonInterface";

export default function LoginSingnUpButton({
  buttonLabel,
  buttonStyle,
  buttonClick,
}: LoginSingnUpButtonInterface) {
  return (
    <button
      onClick={() => buttonClick()}
      type="button"
      className={`text-white p-1 flex-1 flex items-center justify-center cursor-pointer rounded-2xl ${buttonStyle}`}
    >
      {buttonLabel}
    </button>
  );
}

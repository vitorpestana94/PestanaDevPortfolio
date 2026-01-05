import useSwitchAutoButton from "./useSwitchAutoButton";
export default function SwitchAutoButton() {
  const { activeLogin, activeSignUp, loginStyle, signUpStyle } =
    useSwitchAutoButton();

  return (
    <div
      className="absolute z-50 flex rounded-3xl border-[1.5px] border-black
    w-[30%] h-[5%] top-[40%] sm:top-[3%] sm:w-[10%] sm:h-[7%] xl:h-[5%] text-black text-[0.75rem]
    right-[5%] sm:right-[1.5%] " // Exemplo de tamanho fixo para o pai
    >
      <button
        onClick={() => activeSignUp()}
        type="button"
        className={`border-r border-black flex-1 flex items-center justify-center cursor-pointer rounded-3xl rounded-r-none ${signUpStyle}`}
      >
        Sign-Up
      </button>
      <button
        onClick={() => activeLogin()}
        type="button"
        className={`border-l border-black  flex-1 flex items-center justify-center cursor-pointer rounded-3xl rounded-l-none ${loginStyle}`}
      >
        Login
      </button>
    </div>
  );
}

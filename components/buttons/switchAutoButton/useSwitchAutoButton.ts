import { useEffect, useState } from "react";

export default function useSwitchAutoButton() {
  const [active, setActive] = useState<number>(0);
  const activeStyle: string = "bg-[#38b6ff] text-white";
  const inactiveStyle: string = "bg-gray-600 grayscale-75 text-gray-400";
  const [loginStyle, setLoginStyle] = useState<string>(activeStyle);
  const [signUpStyle, setSignUpsStyle] = useState<string>(inactiveStyle);

  function activeLogin() {
    setActive(0);
  }

  function activeSignUp() {
    setActive(1);
  }

  useEffect(() => {
    setLoginStyle(active === 0 ? activeStyle : inactiveStyle);
    setSignUpsStyle(active === 1 ? activeStyle : inactiveStyle);
  }, [active]);

  return {
    activeLogin,
    activeSignUp,
    active,
    inactiveStyle,
    activeStyle,
    loginStyle,
    signUpStyle,
  };
}

import { useState } from "react";

export default function useAuthSection() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  function switchAuth() {
    setIsLogin(!isLogin);
  }

  return { isLogin, switchAuth };
}

import { useRedirectTo } from "./useRedirectTo";
import useLocalePath from "./useLocalePath";
import { Platform } from "@/models/enums/Platform";
import { handleSign } from "@/utils/authentication/authProviderHandler";

export default function useAuthHandlers() {
  const { redirectTo } = useRedirectTo();
  const { path } = useLocalePath(redirectTo);

  function googleLogin() {
    handleSign(Platform.Google, path);
  }

  function githubLogin() {
    handleSign(Platform.Github, path);
  }

  function linkedinLogin() {
    handleSign(Platform.Linkedin, path);
  }

  return { googleLogin, githubLogin, linkedinLogin };
}

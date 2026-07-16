import useAuthHandlers from "@/hooks/useAuthHandlers";
import Button from "@/components/buttons/platformButton/PlatformButton";

export default function PlatformsLoginDiv() {
   const { googleLogin, githubLogin, linkedinLogin } = useAuthHandlers();

   return (
      <div className="flex flex-col justify-between gap-y-2 sm:gap-y-3 w-[50%] sm:w-[40%]">
         <Button signInFunction={googleLogin} iconName="google" />
         <Button signInFunction={githubLogin} iconName="gitHub" />
         <Button signInFunction={linkedinLogin} iconName="linkedin" />
      </div>
   );
}

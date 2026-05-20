"use client";

import AuthForm from "../AuthForm";
import Login from "../../titles/LoginTitle";
import LoginWithEmail from "../../divs/LoginInputsDiv/LoginInputsDiv";
import LoginWithPlatforms from "../../divs/PlatformsLoginDiv/PlatformsLoginDiv";
import Wrapper from "../../wrappers/AuthWrapper";
import Or from "../../hrs/LoginHr";
import Interface from "./LoginFormInterface";

export default function LoginForm({ switchToForgotPassword }: Interface) {
   return (
      <AuthForm>
         <Login />
         <LoginWithPlatforms />
         <Or />
         <Wrapper>
            <LoginWithEmail switchToForgotPassword={switchToForgotPassword} />
         </Wrapper>
      </AuthForm>
   );
}

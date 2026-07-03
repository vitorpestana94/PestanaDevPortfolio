"use client";

import AuthForm from "../DevidedDivFormWrapper";
import Login from "../../titles/LoginTitle";
import LoginWithEmail from "../../divs/LoginInputsDiv/LoginInputsDiv";
import LoginWithPlatforms from "../../divs/PlatformsLoginDiv/PlatformsLoginDiv";
import Wrapper from "../../wrappers/FormWrapper";
import Or from "../../hrs/OrHr";

export default function LoginForm() {
   return (
      <AuthForm>
         <Login />
         <LoginWithPlatforms />
         <Or />
         <Wrapper>
            <LoginWithEmail />
         </Wrapper>
      </AuthForm>
   );
}

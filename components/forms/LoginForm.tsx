"use client";

import AuthForm from "./AuthForm";
import Login from "../titles/LoginTitle";
import LoginWithEmail from "../divs/LoginInputsDiv/LoginInputsDiv";
import LoginWithPlatforms from "../divs/PlatformsLoginDiv/PlatformsLoginDiv";
import Wrapper from "../wrappers/AuthWrapper";
import Or from "../hrs/LoginHr";

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

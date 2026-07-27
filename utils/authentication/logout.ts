import AuthService from "@/services/AuthServiceClient";
import { signOut } from "next-auth/react";

export async function logout(){
   await AuthService.LogouUser();

   await signOut();
}
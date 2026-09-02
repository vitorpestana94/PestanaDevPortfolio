import { JwtPayload } from "jwt-decode";

export default interface ApiJwtPayload extends JwtPayload {
   sid?: string;
   email?: string;
   name?: string;
}
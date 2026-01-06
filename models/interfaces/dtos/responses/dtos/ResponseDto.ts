import ApiToken from "../ApiToken";
import IsEmailRegistered from "../IsEmailRegistered";

export default interface ResponseDto extends ApiToken, IsEmailRegistered {}

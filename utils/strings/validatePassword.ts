import PasswordValidator from "password-validator";

export default function validatePassword() {
  const schema = new PasswordValidator();

  schema
    .is()
    .min(8)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .digits(2)
    .has()
    .not()
    .spaces()
    .has()
    .symbols();

  return schema;
}

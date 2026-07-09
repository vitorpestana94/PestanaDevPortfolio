import Interface from "./EditProfileInputInterface";

export default function EditProfileInput({
   props,
   label,
   type,
   register,
   autoCompleteType,
}: Interface) {
   function getAutoComplete() {
      const typePerString = {
         name: "username",
         password: "new-password",
         email: "email",
         off: "off",
      };

      return typePerString[autoCompleteType ?? "off"];
   }

   return (
      <div className="profileDiv">
         <p className="profileDataLabel">{label}</p>
         <input
            {...register!(type)}
            type={props.type}
            placeholder={props.placeHolder}
            className={`profileDataDiv text-xs focus:outline-none ${props.styles}`}
            autoComplete={getAutoComplete()}
         />
      </div>
   );
}

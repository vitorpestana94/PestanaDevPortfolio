import Interface from "./EditProfileInputInterface";

export default function EditProfileInput({
   props,
   label,
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
            onChange={(event) => props.setFormData(event.target.value)}
            type={props.type}
            placeholder={props.placeHolder}
            className={`profileDataDiv text-xs focus:outline-none ${props.styles}`}
            name={props.name}
            autoComplete={getAutoComplete()}
         />
      </div>
   );
}

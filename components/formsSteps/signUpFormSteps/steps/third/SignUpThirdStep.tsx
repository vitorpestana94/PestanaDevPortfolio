import SignUpThirdStepInterface from "./SignUpThirdStepInterface";
import Name from "@/components/inputs/NameInput/NameInput";

export default function SignUpThirdStep({ setName }: SignUpThirdStepInterface) {
  return (
    <section className="flex flex-col flex-1 justify-around sm:items-center">
      <div className="flex flex-col">
        <Name setName={setName} placeholder="teste" />
      </div>
    </section>
  );
}

import useFourthStep from "./useFourthStep";
import Check from "@/components/icons/Icons";
import Success from "@/components/paragraphs/SignUpFormParagraph";
import Home from "@/components/buttons/authButton/AuthButton";

export default function FourthStep() {
  const { t, redirectToHome } = useFourthStep();

  return (
    <section className="flex flex-col justify-around items-center h-full">
      <Success text={t("title")} />
      <Check iconName="badgeCheck" className="aspect-square w-5/12" />
      <Home
        buttonLabel="Home"
        submit={redirectToHome}
        isFormWithErrors={false}
      />
    </section>
  );
}

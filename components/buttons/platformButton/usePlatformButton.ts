import { useTranslations } from "next-intl";
import useButtonMotionEffects from "@/hooks/useButtonMotionEffects";
import { useState, useEffect } from "react";
import { toastLoading } from "@/utils/errors/toastHandlers";

export default function usePlatformButton(signInFunction: () => void, isSignUp?: boolean) {
   const t = useTranslations();
   const [accepteded, setAccepteded] = useState(false);
   const [show, setShow] = useState(false);
   const { scale, transition } = useButtonMotionEffects();
   const buttonColors: { [key: string]: string } = {
      google: "bg-white text-black",
      gitHub: "bg-[#24292E] text-white",
      linkedin: "bg-[#0077B5] text-white",
   };

   function accepteTerms(accepteded: boolean) {
      setAccepteded(accepteded);
   }

   function signIn(){
      signInFunction();

      toastLoading(t("loading"));
   }

   function showTermsPolicyModal() {
      if (isSignUp){
         setShow(true);
      }else {
         signIn();
      }
   }


   useEffect(() => {
      if (accepteded) {
         signIn();
      }
   }, [accepteded]);

   return {
      t,
      buttonColors,
      scale,
      transition,
      accepteded,
      show,
      showTermsPolicyModal,
      accepteTerms,
   };
}

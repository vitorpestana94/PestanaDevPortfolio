import { useTranslations } from "next-intl";
import useButtonMotionEffects from "@/hooks/useButtonMotionEffects";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function usePlatformButton(signInFunction: () => void) {
   const t = useTranslations();
   const [accepteded, setAccepteded] = useState(false);
   const [show, setShow] = useState(false);
   const { scale, transition } = useButtonMotionEffects();
   const buttonColors: { [key: string]: string } = {
      google: "bg-white text-black",
      gitHub: "bg-[#24292E] text-white",
      linkedin: "bg-[#0077B5] text-white",
   };

   function accepteTerms(accepte: boolean) {
      setAccepteded(accepte);
   }

   function showTermsPolicyModal() {
      setShow(true);
   }

   useEffect(() => {
      if (accepteded) {
         signInFunction();

         toast.loading(t("loading"), {
            style: {
               backgroundColor: "#38b6ff",
               color: "#ffff",
            },
         });
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

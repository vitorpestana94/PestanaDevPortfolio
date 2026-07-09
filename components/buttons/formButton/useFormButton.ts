import useButtonMotionEffects from "@/hooks/useButtonMotionEffects";

export default function useFormButton() {
   const { scale, transition } = useButtonMotionEffects();

   return { transition, scale };
}

"use client";

import Interface from "./ResendTokenSpanInterface";
import useResendTokenSpan from "./useResendTokenSpan";

export default function ResendTokenSpan({ email, setLoading }: Interface) {
   const { t, seconds, resendings, handleClick } = useResendTokenSpan({
      email,
      setLoading,
   });

   function getLabel(isResending: boolean) {
      return !isResending ? (
         <>
            {`${t("havent")}`}
            {seconds !== 0 ? (
               ` ${t("waitToSendResetToken", { wait: `${seconds}s` })}`
            ) : (
               <p
                  onClick={handleClick}
                  className={`hoverPestana whitespace-break-spaces cursor-pointer`}
               >
                  {" "}
                  {`${t("sendNow")}`}
               </p>
            )}
         </>
      ) : (
         <>{`${t("reached")}`}</>
      );
   }

   return (
      <span
         className="flex
      text-[0.625rem] whitespace-pre-line ml-4 max-w-[280px]
      sm:self-start
      sm:text-[0.75rem] 
      xl:max-w-[450px]"
      >
         {getLabel(resendings > 3)}
      </span>
   );
}

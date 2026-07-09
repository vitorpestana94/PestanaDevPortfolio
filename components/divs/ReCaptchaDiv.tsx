import ThisSiteIsProtectedByGoogle from "@/components/divs/GoogleReCaptachaDiv";

export default function ReCaptchaDiv({
   children,
   styles,
}: {
   children?: React.ReactNode;
   styles?: {
      mainDiv?: {
         className?: string;
      };
      captcha?: {
         className?: string;
      };
   };
}) {
   return (
      <div
         className={`flex flex-col gap-y-3 w-full items-center ${styles?.mainDiv?.className}`}
      >
         {children}
         <ThisSiteIsProtectedByGoogle className={styles?.captcha?.className} />
      </div>
   );
}

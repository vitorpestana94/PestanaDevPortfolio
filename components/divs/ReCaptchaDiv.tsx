import ThisSiteIsProtectedByGoogle from "@/components/divs/GoogleReCaptachaDiv";

export default function ReCaptchaDiv({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="flex flex-col gap-y-3 w-full items-center">
         {children}
         <ThisSiteIsProtectedByGoogle />
      </div>
   );
}

export async function getCaptchaToken() {
   return new Promise<string | null>((resolve) => {
      grecaptcha.ready(async () => {
         if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
            resolve(null);

            return null;
         }

         const token = await grecaptcha.execute(
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
            {
               action: "support",
            },
         );

         resolve(token);
      });
   });
}

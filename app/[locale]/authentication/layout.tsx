import AuthAndProfileLayout from "@/components/layouts/AuthAndProfileLayout/AuthAndProfileLayout";

if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
   throw Error("BUILD ERROR: RECAPTCHA PUBLIC KEY NOT SETTED");
}

export default async function DashboardSectionLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return <AuthAndProfileLayout children={children} />;
}

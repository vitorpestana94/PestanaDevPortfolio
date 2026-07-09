import AuthAndProfileLayout from "@/components/layouts/AuthAndProfileLayout/AuthAndProfileLayout";

if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
   throw Error("BUILD ERROR: RECAPTCHA PUBLIC KEY NOT SETTED");
}

export default function ProfileSectionLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return <AuthAndProfileLayout root="user" children={children} />;
}

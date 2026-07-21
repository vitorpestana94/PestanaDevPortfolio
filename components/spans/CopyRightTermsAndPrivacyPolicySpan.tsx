import Copyright from "@/components/paragraphs/CopyrightParagraph";
import TermsOrPrivacy from "../hyperLinks/TermsOrPrivacyHyperLink";

export default function CopyRightTermsAndPrivacyPolicySpan() {
   return (
      <span className="flex flex-col gap-y-2 sm:flex-row sm:gap-x-4 sm:gap-y-0">
         <Copyright />
         <span className="flex mx-auto sm:mx-0 flex-row gap-x-4">
            <TermsOrPrivacy isTerms />
            <TermsOrPrivacy />
         </span>
      </span>
   );
}

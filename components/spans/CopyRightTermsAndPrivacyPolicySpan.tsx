import Copyright from "@/components/paragraphs/CopyrightParagraph";
import TermsOrPrivacy from "../hyperLinks/TermsOrPrivacyHyperLink";

export default function CopyRightTermsAndPrivacyPolicySpan() {
   return (
      <span className="flex flex-col gap-y-2 xl:flex-row xl:gap-x-4 xl:gap-y-0">
         <Copyright />
         <span className="flex mx-auto xl:mx-0 flex-row gap-x-4">
            <TermsOrPrivacy isTerms />
            <TermsOrPrivacy />
         </span>
      </span>
   );
}

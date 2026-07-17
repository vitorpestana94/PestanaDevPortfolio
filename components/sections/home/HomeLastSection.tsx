"use client";

import Wrapper from "@/components/wrappers/home/HomeWrapper";
import VP from "../../icons/Icons";
import Contato from "@/components/forms/homeFooterForm/HomeFooterForm";
import useIsMobile from "@/hooks/useIsMobile";
import CopyRightTermsAndPrivacyPolicy from "@/components/spans/CopyRightTermsAndPrivacyPolicySpan";

export default function HomeLastSection() {
   const { isMobile } = useIsMobile();

   return (
      <section
         id="meuTrabalho"
         className="homeGrayBg py-5 sm:py-10 md:py-16 xl:py-20"
      >
         <Wrapper className="conteudoWrapper flex flex-col items-center sm:items-stretch h-full sm:flex-row pr-6 sm:pr-0 justify-between">
            <div className="flex flex-col flex-1 justify-between">
               <VP
                  iconName="vP"
                  className="homeVp mx-auto mb-2 sm:mb-0 sm:mx-0 sm:w-16! lg:w-20! 4xl:w-22!"
               />
               {!isMobile && <CopyRightTermsAndPrivacyPolicy />}
            </div>
            <Contato />
            {isMobile && <CopyRightTermsAndPrivacyPolicy />}
         </Wrapper>
      </section>
   );
}

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
         className="homeGrayBg py-5 md:py-16 xl:py-20"
      >
         <Wrapper className="conteudoWrapper flex flex-col items-center xl:items-stretch h-full xl:flex-row pr-6 xl:pr-0 justify-between">
            <div className="flex flex-col flex-1 justify-between">
               <VP
                  iconName="vP"
                  className="homeVp mx-auto mb-2 xl:mb-0 xl:mx-0 md:w-16! 4xl:w-22!"
               />
               {!isMobile && <CopyRightTermsAndPrivacyPolicy />}
            </div>
            <Contato />
            {isMobile && <CopyRightTermsAndPrivacyPolicy />}
         </Wrapper>
      </section>
   );
}

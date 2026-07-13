"use client";

import Wrapper from "@/components/wrappers/home/HomeWrapper";
import VP from "../../icons/Icons";
import Contato from "@/components/forms/homeFooterForm/HomeFooterForm";
import Copyright from "@/components/paragraphs/CopyrightParagraph";
import useIsMobile from "@/hooks/useIsMobile";

export default function HomeLastSection() {
   const { isMobile } = useIsMobile();

   return (
      <section id="meuTrabalho" className="bg-[#2c2c2c] py-16 xl:py-20">
         <Wrapper className="conteudoWrapper flex flex-col items-center sm:items-stretch h-full sm:flex-row pr-6 sm:pr-0 justify-between">
            <div className="flex flex-col flex-1 justify-between">
               <VP
                  iconName="vP"
                  className="homeVp mx-auto mb-2 sm:mb-0 sm:mx-0"
               />
               {!isMobile && <Copyright />}
            </div>
            <Contato />
            {isMobile && <Copyright />}
         </Wrapper>
      </section>
   );
}

import TermsAndConditionsDocument from "@/components/textBlocks/LegalDocumentTextBlock";
import DocumentSection from "@/components/divs/LegalDocumentDiv";
import AutoCopyEmail from "@/components/spans/AutoCopySpan";
import Title from "@/components/titles/LegalDocumentTitle";
import Paragraph from "@/components/paragraphs/LegalDocumentParagraph";
import OrderedList from "@/components/lists/LegalDocumentOrderedList";
import Item from "@/components/lists/listItems/LegalDocumentListItem";
import { getLocale, getTranslations } from "next-intl/server";

export default async function TermsAndConditions() {
   const t = await getTranslations({
      locale: await getLocale(),
      namespace: "termsAndConditions",
   });

   return (
      <TermsAndConditionsDocument buttonLabel={t("backToHome")}>
         <DocumentSection>
            <Title mainTitle>{t("documentTitle.title")}</Title>
            <Paragraph>{t("documentTitle.effective")}</Paragraph>
            <Paragraph>
               {t("documentTitle.lcc")}
               <AutoCopyEmail />
            </Paragraph>
         </DocumentSection>
         <DocumentSection>
            <Title>{t("1.title")}</Title>
            <Paragraph>{t("1.text")}</Paragraph>
            <Paragraph>{t("1.end")}</Paragraph>
         </DocumentSection>
         <DocumentSection>
            <Title>{t("2.title")}</Title>
            <Paragraph>{t("2.text")}</Paragraph>
            <Paragraph>{t("2.list1.p")}</Paragraph>
            <OrderedList>
               <Item>{t("2.list1.item1")}</Item>
               <Item>{t("2.list1.item2")}</Item>
            </OrderedList>
            <Paragraph>{t("2.end")}</Paragraph>
         </DocumentSection>
         <DocumentSection>
            <Title>{t("3.title")}</Title>
            <Paragraph>{t("3.text")}</Paragraph>
            <OrderedList>
               <Item>{t("3.list1.item1")}</Item>
               <Item>{t("3.list1.item2")}</Item>
            </OrderedList>
            <Paragraph>{t("3.end")}</Paragraph>
         </DocumentSection>
         <DocumentSection>
            <Title>{t("4.title")}</Title>
            <Paragraph>{t("4.text")}</Paragraph>
            <Paragraph>{t("4.list1.p")}</Paragraph>
            <OrderedList>
               <Item>{t("4.list1.item1")}</Item>
               <Item>{t("4.list1.item2")}</Item>
            </OrderedList>
            <Paragraph>{t("4.end")}</Paragraph>
         </DocumentSection>
         <DocumentSection>
            <Title>{t("5.title")}</Title>
            <Paragraph>{t("5.text")}</Paragraph>
            <OrderedList>
               <Item>{t("5.list1.item1")}</Item>
               <Item>{t("5.list1.item2")}</Item>
               <Item>{t("5.list1.item3")}</Item>
            </OrderedList>
            <Paragraph>{t("5.end")}</Paragraph>
         </DocumentSection>
         <DocumentSection>
            <Title>{t("6.title")}</Title>
            <Paragraph>{t("6.text")}</Paragraph>
            <OrderedList>
               <Item>{t("6.list1.item1")}</Item>
               <Item>{t("6.list1.item2")}</Item>
               <Item>{t("6.list1.item3")}</Item>
               <Item>{t("6.list1.item4")}</Item>
               <Item>{t("6.list1.item5")}</Item>
               <Item>{t("6.list1.item6")}</Item>
            </OrderedList>
            <Paragraph>{t("5.end")}</Paragraph>
         </DocumentSection>
         <DocumentSection>
            <Title>{t("7.title")}</Title>
            <Paragraph>{t("7.text")}</Paragraph>
            <Paragraph>{t("7.end")}</Paragraph>
         </DocumentSection>
         <DocumentSection>
            <Title>{t("8.title")}</Title>
            <Paragraph>{t("7.text")}</Paragraph>
            <OrderedList>
               <Item>{t("8.list1.item1")}</Item>
               <Item>{t("8.list1.item2")}</Item>
               <Item>{t("8.list1.item3")}</Item>
               <Item>{t("8.list1.item4")}</Item>
            </OrderedList>
         </DocumentSection>
         <DocumentSection>
            <Title>{t("9.title")}</Title>
            <Paragraph>{t("9.text")}</Paragraph>
            <Paragraph>{t("9.list1.p")}</Paragraph>
            <OrderedList>
               <Item>{t("5.list1.item1")}</Item>
               <Item>{t("5.list1.item2")}</Item>
               <Item>{t("5.list1.item3")}</Item>
            </OrderedList>
         </DocumentSection>
         <DocumentSection>
            <Title>{t("10.title")}</Title>
            <Paragraph>{t("10.p")}</Paragraph>
         </DocumentSection>
         <DocumentSection>
            <Title>{t("11.title")}</Title>
            <Paragraph>
               {t("11.p")}
               <AutoCopyEmail />
            </Paragraph>
         </DocumentSection>
      </TermsAndConditionsDocument>
   );
}

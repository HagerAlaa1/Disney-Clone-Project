import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

type AnswerPart =
  | string
  | {
      text: string;
      link?: string;
    };
type faqsType = {
  question: string;
  answer: AnswerPart[] | string;
  answer2?: AnswerPart[] | string;
  lists?: string[];
};
function FAQ() {
  const { t } = useTranslation("common");
  const faqs = t("faqs.items", { returnObjects: true }) as faqsType[];
  return (
    <>
      <section className="relative text-center mt-20">
        <div>
          <h2 className="text-white text-center text-[20px] md:text-[32px] lg:text-[42px] font-semibold tracking-[-0.2px] md:tracking-[-0.4px] leading-7 md:leading-10.5 lg:leading-13.5 mb-4 md:mb-10">
            {t("faqs.title")}
          </h2>
        </div>
        <div className="mx-auto w-4/5 text-[#8f98b2]">
          <Accordion type="multiple">
            {faqs.map((faq, i) => {
              const applyListdisc = i < 2;
              const isSecondLast = i === faqs.length - 2;
              return (
                <AccordionItem value={`item-${i + 1}`} key={i}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent isSecondLast={isSecondLast}>
                    {Array.isArray(faq.answer)
                      ? faq.answer.map((part, k) =>
                          typeof part === "string" ? (
                            <p key={k} className="mt-2">
                              {part}
                            </p>
                          ) : (
                            <p key={k} className="mt-2">
                              <a
                                href={part.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer"
                              >
                                {part.text}
                              </a>
                            </p>
                          ),
                        )
                      : faq.answer && <p className="mt-2">{faq.answer}</p>}

                    <ul
                      className={`${applyListdisc ? "list-disc list-outside ml-5" : ""} space-y-2 mt-4`}
                    >
                      {faq.lists?.map((list, index) => (
                        <li key={index}>{list}</li>
                      ))}
                    </ul>

                    {Array.isArray(faq.answer2)
                      ? faq.answer2.map((ans, h) =>
                          typeof ans === "string" ? (
                            <p key={h} className="mt-2">
                              {ans}
                            </p>
                          ) : (
                            <p key={h} className="mt-2">
                              <a
                                href={ans.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer"
                              >
                                {ans.text}
                              </a>
                            </p>
                          ),
                        )
                      : faq.answer2 && <p className="mt-2">{faq.answer2}</p>}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>
    </>
  );
}

export default FAQ;

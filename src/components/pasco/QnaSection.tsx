import FadeUp from './FadeUp';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { QNA_ITEMS } from '@/lib/constants';

export default function QnaSection() {
  return (
    <section className="section-spacing bg-[#F8F5EF]" aria-labelledby="qna-heading">
      <div className="container-pasco">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">
              Frequently Asked Questions
            </span>
            <h2
              id="qna-heading"
              className="mt-3 text-3xl md:text-4xl font-semibold text-[#1A1A1A]"
            >
              Got Questions? We Have Answers
            </h2>
            <p className="mt-3 text-[#6B6B6B] leading-relaxed max-w-xl mx-auto">
              Find quick answers to the most common questions about our products, orders, and services.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {QNA_ITEMS.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger className="text-left text-sm font-semibold text-[#1A1A1A] hover:text-[#214E34]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-[#6B6B6B] leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
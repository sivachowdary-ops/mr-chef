/**
 * FAQ — Frequently Asked Questions (shadcn Accordion)
 *
 * Uses base-ui Accordion via shadcn wrappers.
 * Data sourced from faqItems in siteConfig.
 */

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/siteConfig";

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="section-heading font-heading">
            Frequently Asked Questions
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Everything you need to know before starting
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-b border-brand-warm-gray"
              >
                <AccordionTrigger className="py-5 font-heading text-lg text-brand-charcoal hover:no-underline hover:text-brand-amber transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-muted leading-relaxed text-base pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

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
          <span className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-amber mb-3.5">
            Questions Answered
          </span>
          <h2 className="section-heading font-heading">
            Frequently Asked Questions
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Everything you need to know before starting
          </p>
        </div>

        {/* Accordion List with Elevation and Separation */}
        <div className="max-w-3xl mx-auto">
          <Accordion className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="card-premium bg-white border border-brand-warm-gray/60 rounded-2xl overflow-hidden px-1 sm:px-2"
              >
                <AccordionTrigger className="px-5 py-4 font-heading text-base sm:text-lg font-bold text-brand-charcoal hover:no-underline hover:text-brand-amber transition-colors text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 text-brand-muted leading-relaxed text-sm sm:text-base pb-5">
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

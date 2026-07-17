/**
 * HowItWorks — Five-step process timeline
 *
 * Desktop: horizontal flow with connecting lines between step circles.
 * Mobile:  vertical flow with a connecting line on the left.
 */

import {
  MessageCircle,
  ClipboardList,
  Lock,
  Factory,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { processSteps } from "@/data/siteConfig";

/* ── Icon resolver ──────────────────────────────────────────── */
const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  ClipboardList,
  Lock,
  Factory,
  Rocket,
};

function resolveIcon(name: string): LucideIcon {
  return iconMap[name] ?? MessageCircle;
}

/* ── Component ──────────────────────────────────────────────── */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-20">
          <h2 className="section-heading font-heading">How It Works</h2>
          <p className="section-subheading mx-auto mt-4">
            From first enquiry to serving customers — we handle the heavy
            lifting
          </p>
        </div>

        {/* ── Desktop timeline (hidden below lg) ───────────────── */}
        <div className="hidden lg:block">
          <div className="relative grid grid-cols-5 gap-6">
            {/* Connecting line behind cards */}
            <div
              className="absolute top-[2.75rem] left-[10%] right-[10%] h-0.5 bg-brand-warm-gray"
              aria-hidden="true"
            />

            {processSteps.map((step) => {
              const Icon = resolveIcon(step.icon);
              return (
                <article
                  key={step.step}
                  className="animate-on-scroll relative flex flex-col items-center text-center"
                >
                  {/* Step circle */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-brand-amber text-white font-bold text-lg shadow-md shadow-brand-amber/20">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-warm-gray text-brand-amber">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  {/* Text */}
                  <h3 className="mt-4 font-heading text-base font-semibold text-brand-charcoal leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-muted leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* ── Mobile / Tablet timeline (visible below lg) ──────── */}
        <div className="lg:hidden">
          <div className="relative pl-10 sm:pl-14">
            {/* Vertical connecting line */}
            <div
              className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-brand-warm-gray"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-10">
              {processSteps.map((step) => {
                const Icon = resolveIcon(step.icon);
                return (
                  <article
                    key={step.step}
                    className="animate-on-scroll relative"
                  >
                    {/* Step circle (overlaps vertical line) */}
                    <div className="absolute -left-10 sm:-left-14 top-0 z-10 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-brand-amber text-white font-bold text-sm sm:text-base shadow-md shadow-brand-amber/20">
                      {step.step}
                    </div>

                    {/* Card */}
                    <div className="card-premium p-5 sm:p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-warm-gray text-brand-amber">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <h3 className="font-heading text-base font-semibold text-brand-charcoal">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-brand-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

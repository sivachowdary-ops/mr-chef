import {
  Percent,
  Wrench,
  TrendingUp,
  MapPin,
  Truck,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { benefits } from "@/data/siteConfig";

/** Map icon-name strings from config → actual Lucide components */
const iconMap: Record<string, LucideIcon> = {
  Percent,
  Wrench,
  TrendingUp,
  MapPin,
  Truck,
  Settings,
};

export default function WhyPartner() {
  return (
    <section id="why-us" className="section-padding bg-brand-bg bg-dot-pattern relative">
      <div className="section-container">
        {/* ── Heading ───────────────────────────────────────── */}
        <div className="mb-12 text-center lg:mb-16">
          <span className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-amber mb-3.5">
            Why Mr Chef
          </span>
          <h2 className="section-heading">
            Why Partner With <span className="text-gradient">Mr Chef</span>
          </h2>
        </div>

        {/* ── Cards grid ────────────────────────────────────── */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];

            return (
              <article
                key={benefit.title}
                className="card-premium animate-on-scroll flex flex-col gap-4 p-6 sm:p-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon circle */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-amber/10">
                  {Icon ? (
                    <Icon className="h-6 w-6 text-brand-amber" />
                  ) : (
                    <span className="text-xs text-brand-muted">?</span>
                  )}
                </div>

                <h3 className="font-heading text-lg font-bold text-brand-charcoal">
                  {benefit.title}
                </h3>

                <p className="leading-relaxed text-brand-muted">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* ── Disclaimer ────────────────────────────────────── */}
        <p className="mt-10 text-center text-xs leading-relaxed text-brand-muted/70">
          *Profit estimates are illustrative examples, not guarantees. Actual
          results depend on location, footfall, and operation.
        </p>
      </div>
    </section>
  );
}

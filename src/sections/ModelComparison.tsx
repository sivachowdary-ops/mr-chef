import { Ruler, Sparkles } from "lucide-react";

export default function ModelComparison() {
  return (
    <section id="model-comparison" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="section-heading font-heading">
            Model <span className="text-gradient">Comparison</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Compare the physical units side-by-side to choose the right fit for your location.
          </p>
        </div>

        {/* Side-by-side cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Card 1: Basic Stall */}
          <div className="card-premium p-6 sm:p-8 flex flex-col bg-white border-brand-warm-gray/60">

            {/* Model Title */}
            <div className="mb-4">
              <span className="text-xs text-brand-amber font-bold uppercase tracking-wider">
                Entry Level Stall
              </span>
              <h3 className="font-heading text-xl font-extrabold text-brand-charcoal mt-0.5">
                Basic Stall (Open Back)
              </h3>
            </div>

            {/* Model Summary Specs */}
            <ul className="space-y-3.5 mb-6 text-sm text-brand-muted flex-grow">
              <li className="flex items-center gap-2">
                <Ruler className="h-4.5 w-4.5 text-brand-amber/80 shrink-0" />
                <span>Compact footprint (6ft Length × 3ft Width) ideal for tight corner spaces.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                <span>Open back design for easy ventilation and service operations.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                <span>Comes with essential street food starter tools and single fryer.</span>
              </li>
            </ul>

            {/* Anchor Label */}
            <div className="pt-4 border-t border-brand-warm-gray/40 text-center">
              <a
                href="#packages"
                className="text-xs font-bold uppercase tracking-wider text-brand-charcoal hover:text-brand-amber transition-colors"
              >
                View Full Basic Specs &rarr;
              </a>
            </div>
          </div>

          {/* Card 2: Box-Type Mid Model */}
          <div className="card-premium p-6 sm:p-8 flex flex-col bg-white border-brand-warm-gray/60">

            {/* Model Title */}
            <div className="mb-4">
              <span className="text-xs text-brand-amber font-bold uppercase tracking-wider">
                Full-Feature Mobile Kiosk
              </span>
              <h3 className="font-heading text-xl font-extrabold text-brand-charcoal mt-0.5">
                Box-Type Mobile Stall (Mid)
              </h3>
            </div>

            {/* Model Summary Specs */}
            <ul className="space-y-3.5 mb-6 text-sm text-brand-muted flex-grow">
              <li className="flex items-center gap-2">
                <Ruler className="h-4.5 w-4.5 text-brand-amber/80 shrink-0" />
                <span>Larger layout (7ft Length × 5ft Width) fitted with 4 mobility wheels.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                <span>Lockable double-layer box layout for secure outdoor overnight parking.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                <span>Includes pizza oven, waffle machine, and dual melter systems.</span>
              </li>
            </ul>

            {/* Anchor Label */}
            <div className="pt-4 border-t border-brand-warm-gray/40 text-center">
              <a
                href="#packages"
                className="text-xs font-bold uppercase tracking-wider text-brand-charcoal hover:text-brand-amber transition-colors"
              >
                View Full Mid Specs &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

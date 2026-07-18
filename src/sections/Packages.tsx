import { useState } from "react";
import {
  Check,
  Truck,
  Target,
  ChevronDown,
  ChevronUp,
  Settings,
  ArrowUpDown,
  ArrowLeftRight,
  Maximize2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { packages, customizationNote } from "@/data/packages";
import { buildWhatsAppUrl } from "@/data/siteConfig";
import type { FranchisePackage } from "@/data/packages";
import WhatsAppIcon from "@/components/WhatsAppIcon";

/** Individual package card */
function PackageCard({ pkg, index }: { pkg: FranchisePackage; index: number }) {
  const [showEquipment, setShowEquipment] = useState(false);

  return (
    <article
      className="card-premium animate-on-scroll relative flex flex-col overflow-hidden"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* ── Badge ─────────────────────────────────────────── */}
      {pkg.badge && (
        <div className="absolute right-4 top-4 z-10">
          <Badge className="bg-brand-amber text-white border-brand-amber px-3 py-1 text-xs font-semibold">
            {pkg.badge}
          </Badge>
        </div>
      )}
      {/* ── Card body ─────────────────────────────────────── */}
      <div className="flex flex-1 flex-col gap-6 p-6 sm:p-8">
        {/* Name + subtitle */}
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-heading text-2xl font-bold text-brand-charcoal">
              {pkg.name}
            </h3>
            <Badge className="bg-brand-cream hover:bg-brand-cream/80 text-brand-charcoal border border-brand-warm-gray/60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider shrink-0">
              {pkg.kitchenType}
            </Badge>
          </div>
          <p className="mt-1 text-sm text-brand-muted">{pkg.subtitle}</p>
        </div>

        {/* ── Price (hero element) ────────────────────────── */}
        <p className="text-4xl font-bold text-brand-amber sm:text-5xl">
          {pkg.priceFormatted}
        </p>

        {/* ── Dimensions Stat Grid ────────────────────────── */}
        <div className="grid grid-cols-3 rounded-xl border border-brand-warm-gray/60 bg-brand-cream/25 py-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
          {/* Height */}
          <div className="flex flex-col items-center justify-center border-r border-brand-warm-gray/60 px-2">
            <ArrowUpDown className="h-4 w-4 text-brand-amber/80 mb-1" />
            <span className="text-base font-bold text-brand-charcoal leading-none">
              {pkg.dimensions.height}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-muted mt-1">
              Height
            </span>
          </div>
          {/* Length */}
          <div className="flex flex-col items-center justify-center border-r border-brand-warm-gray/60 px-2">
            <ArrowLeftRight className="h-4.5 w-4.5 text-brand-amber/80 mb-1" />
            <span className="text-base font-bold text-brand-charcoal leading-none">
              {pkg.dimensions.length}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-muted mt-1">
              Length
            </span>
          </div>
          {/* Width */}
          <div className="flex flex-col items-center justify-center px-2">
            <Maximize2 className="h-4.5 w-4.5 text-brand-amber/80 mb-1" />
            <span className="text-base font-bold text-brand-charcoal leading-none">
              {pkg.dimensions.width}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-muted mt-1">
              Width
            </span>
          </div>
        </div>

        {/* Spacing Divider */}
        <hr className="border-brand-warm-gray/40 my-1" />

        {/* ── Mobile badge ────────────────────────────────── */}
        {pkg.isMobile && (
          <div className="flex items-center gap-2">
            <Badge className="bg-brand-charcoal text-white border-brand-charcoal gap-1.5 px-3 py-1 text-xs font-medium">
              <Truck className="h-3.5 w-3.5" />
              {pkg.wheelCount} Wheels — Fully Mobile
            </Badge>
          </div>
        )}

        {/* ── Includes ────────────────────────────────────── */}
        <div>
          <h4 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-brand-charcoal/70">
            Includes
          </h4>
          <ul className="space-y-2">
            {pkg.includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-brand-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Equipment (collapsible) ─────────────────────── */}
        <div>
          <button
            type="button"
            onClick={() => setShowEquipment((prev) => !prev)}
            className="flex w-full items-center justify-between rounded-lg border border-brand-warm-gray/60 px-4 py-2.5 text-sm font-semibold text-brand-charcoal transition-colors hover:bg-brand-cream/60"
          >
            <span className="flex items-center gap-2">
              <Settings className="h-4 w-4 text-brand-amber/70" />
              Equipment ({pkg.equipment.length} items)
            </span>
            {showEquipment ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>

          {showEquipment && (
            <ul className="mt-3 space-y-1.5 pl-2">
              {pkg.equipment.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-brand-muted"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-gold/70" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ── Best For ────────────────────────────────────── */}
        <div className="flex items-start gap-2 rounded-lg bg-brand-cream/60 px-4 py-3">
          <Target className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber" />
          <p className="text-sm leading-relaxed text-brand-charcoal">
            <span className="font-semibold">Best for:&nbsp;</span>
            {pkg.bestFor}
          </p>
        </div>

        {/* ── CTA ─────────────────────────────────────────── */}
        <div className="mt-auto pt-2">
          <a
            href={buildWhatsAppUrl(pkg.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full justify-center"
          >
            <WhatsAppIcon className="h-5 w-5 fill-white text-white" />
            Enquire About {pkg.name}
          </a>
        </div>
      </div>
    </article>
  );
}

/** Packages section */
export default function Packages() {
  return (
    <section id="packages" className="section-padding bg-white">
      <div className="section-container">
        {/* ── Heading ───────────────────────────────────────── */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center lg:mb-16">
          <h2 className="section-heading">
            Franchise <span className="text-gradient">Packages</span>
          </h2>
          <p className="section-subheading">
            Choose the package that fits your investment and vision
          </p>
        </div>

        {/* ── Package cards ─────────────────────────────────── */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>

        {/* ── Customization note ────────────────────────────── */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-brand-cream/70 px-6 py-5 text-center sm:px-8">
          <p className="flex flex-col items-center gap-2 text-sm leading-relaxed text-brand-muted sm:flex-row sm:justify-center sm:gap-3">
            <Settings className="h-5 w-5 shrink-0 text-brand-amber" />
            {customizationNote}
          </p>
        </div>
      </div>
    </section>
  );
}

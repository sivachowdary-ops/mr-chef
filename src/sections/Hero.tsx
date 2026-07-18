import { ChevronDown } from "lucide-react";
import { hero, buildWhatsAppUrl, brand } from "@/data/siteConfig";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Hero() {
  const whatsAppUrl = buildWhatsAppUrl(brand.whatsappDefaultMessage);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] bg-brand-charcoal overflow-hidden flex items-center py-24"
    >
      {/* ── Looping background video ───────────────────────── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover select-none"
        aria-hidden="true"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay backdrop to ensure white text is extremely readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-black/65 backdrop-blur-[2px]"
      />

      {/* Decorative gradient blob for warm lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-amber/20 blur-3xl z-[2]"
      />

      {/* Content */}
      <div className="section-container relative z-10 w-full flex flex-col items-start">
        <div className="max-w-3xl flex flex-col items-start gap-6 text-left">
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.headline}
            <br />
            <span className="text-gradient from-brand-amber to-brand-gold">{hero.headlineAccent}</span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            {hero.subheadline}
          </p>

          {/* One-Time Investment Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-amber/40 bg-brand-amber/15 px-4 py-2 backdrop-blur-sm">
            <span className="text-base">💰</span>
            <span className="text-sm font-bold text-white tracking-wide">
              One-Time Investment — No Recurring Fees
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-start mt-2">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp animate-pulse-once"
            >
              <WhatsAppIcon className="h-5 w-5 fill-white text-white" />
              {hero.primaryCta}
            </a>

            <a
              href="#packages"
              className="btn-outline border-white/20 text-white hover:bg-white hover:text-brand-charcoal"
            >
              <ChevronDown className="h-5 w-5" />
              {hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

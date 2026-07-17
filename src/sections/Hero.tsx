import { ChevronDown } from "lucide-react";
import { hero, buildWhatsAppUrl, brand } from "@/data/siteConfig";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Hero() {
  const whatsAppUrl = buildWhatsAppUrl(brand.whatsappDefaultMessage);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] bg-brand-charcoal overflow-hidden flex items-center py-24"
      style={{
        backgroundImage: "url('/images/hero_food_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay backdrop to ensure white text is extremely readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-black/65 backdrop-blur-[2px]"
      />

      {/* Decorative gradient blob for warm lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-amber/20 blur-3xl"
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

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-start mt-4">
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

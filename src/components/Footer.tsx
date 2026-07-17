import { Phone, MapPin } from "lucide-react";
import { brand, navItems, buildWhatsAppUrl } from "@/data/siteConfig";
import WhatsAppIcon from "@/components/WhatsAppIcon";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
  );
}

export default function Footer() {
  const whatsappUrl = buildWhatsAppUrl(brand.whatsappDefaultMessage);

  return (
    <footer className="bg-brand-charcoal text-white/90 border-t border-brand-charcoal">
      <div className="section-container py-16 sm:py-20">
        {/* ── Top Grid ────────────────────────────────────── */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand details */}
          <div className="flex flex-col gap-5">
            <a href="#" className="inline-block">
              <span className="font-heading text-2xl font-extrabold tracking-tight text-white">
                Mr <span className="text-brand-amber">Chef</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-white/60">
              {brand.tagline}
            </p>
            {/* Trust line */}
            <div className="border-l-2 border-brand-amber/70 pl-3">
              <p className="text-xs font-semibold text-white/70 uppercase tracking-wider leading-snug">
                0% Royalty · Full Setup Included · Pan-AP Franchise Support
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-5 font-heading text-xs font-bold uppercase tracking-widest text-white/40 border-b border-white/5 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-brand-amber hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Block */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-white/40 border-b border-white/5 pb-2">
              Get in Touch
            </h3>
            <ul className="space-y-3.5">
              {/* Phone */}
              <li>
                <a
                  href={brand.phoneLink}
                  className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Phone className="h-4.5 w-4.5 flex-shrink-0 text-brand-amber" />
                  {brand.phoneFormatted}
                </a>
              </li>

              {/* WhatsApp Button */}
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp px-4 py-2.5 text-xs inline-flex w-fit shadow-md shadow-brand-amber/10"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-white text-white" />
                  Chat on WhatsApp
                </a>
              </li>

              {/* Location */}
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="h-4.5 w-4.5 flex-shrink-0 text-brand-amber mt-0.5" />
                <span>{brand.location}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media links */}
          <div>
            <h3 className="mb-5 font-heading text-xs font-bold uppercase tracking-widest text-white/40 border-b border-white/5 pb-2">
              Follow Us
            </h3>
            <p className="text-xs text-white/50 leading-relaxed mb-4">
              [PLACEHOLDER — Social handles coming soon. Handles will link directly to Facebook/Instagram pages]
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/mrchef"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-brand-amber hover:text-white"
                aria-label="Instagram Page"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://facebook.com/mrchef"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-brand-amber hover:text-white"
                aria-label="Facebook Page"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://youtube.com/mrchef"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-brand-amber hover:text-white"
                aria-label="YouTube Channel"
              >
                <YoutubeIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Divider + Copyright ──────────────────────────── */}
        <div className="mt-12 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; 2026 {brand.name}. All rights reserved.
          </p>
          <p className="text-[10px] text-white/30 tracking-wider">
            SITE BY ASTRA AI SOLUTIONS
          </p>
        </div>
      </div>
    </footer>
  );
}

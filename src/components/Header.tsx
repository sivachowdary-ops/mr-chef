import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { brand, navItems, buildWhatsAppUrl } from "@/data/siteConfig";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track scroll position for header shrink + background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); // check initial position
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Smooth‑scroll to section and close mobile menu
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth" });
    },
    [],
  );

  const whatsappUrl = buildWhatsAppUrl(brand.whatsappDefaultMessage);

  return (
    <header
      className={cn(
        "relative inset-x-0 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(31,27,24,0.08)]",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <nav className="section-container flex items-center justify-between">
        {/* ── Wordmark / Logo ─────────────────────────────── */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="relative z-50 flex items-center gap-2"
        >
          <span
            className={cn(
              "font-heading font-extrabold tracking-tight transition-all duration-300",
              scrolled ? "text-xl" : "text-2xl",
              "text-brand-charcoal",
            )}
          >
            Mr{" "}
            <span className="text-brand-amber">Chef</span>
          </span>
        </a>

        {/* ── Desktop Navigation ──────────────────────────── */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-brand-charcoal/80
                           transition-colors hover:bg-brand-warm-gray hover:text-brand-charcoal"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA + Hamburger ─────────────────────── */}
        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp hidden text-sm md:inline-flex"
          >
            <WhatsAppIcon className="h-4.5 w-4.5 fill-white text-white" />
            Enquire on WhatsApp
          </a>

          {/* Hamburger toggle — mobile only */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-50 inline-flex h-10 w-10 items-center justify-center
                       rounded-lg text-brand-charcoal transition-colors hover:bg-brand-warm-gray md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ────────────────────────────── */}
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-brand-charcoal/40 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Slide‑down panel */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-40 overflow-hidden bg-white pt-20 shadow-xl transition-all duration-300 ease-in-out md:hidden",
          mobileOpen
            ? "max-h-[100dvh] opacity-100"
            : "max-h-0 opacity-0",
        )}
      >
        <ul className="section-container flex flex-col gap-1 pb-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-brand-charcoal
                           transition-colors hover:bg-brand-warm-gray"
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* Mobile WhatsApp CTA */}
          <li className="mt-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center text-base"
            >
              <WhatsAppIcon className="h-5 w-5 fill-white text-white" />
              Enquire on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

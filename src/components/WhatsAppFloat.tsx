import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { brand, buildWhatsAppUrl } from "@/data/siteConfig";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function WhatsAppFloat() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [offsetBottom, setOffsetBottom] = useState(false);

  // Trigger mount animation after a brief delay
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 600);
    return () => clearTimeout(timer);
  }, []);

  // Track scroll position to prevent overlapping with footer
  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.querySelector("footer");
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        // If the top of the footer enters the viewport (minus floating button height/padding)
        if (footerRect.top < window.innerHeight) {
          setOffsetBottom(true);
        } else {
          setOffsetBottom(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = buildWhatsAppUrl(brand.whatsappDefaultMessage);

  return (
    <div
      className={cn(
        "fixed z-40 flex items-center gap-3 transition-all duration-500",
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        offsetBottom ? "bottom-20 md:bottom-24 right-6" : "bottom-6 right-6"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Tooltip (desktop only) ────────────────────────── */}
      <span
        className={cn(
          "pointer-events-none hidden select-none rounded-lg bg-brand-charcoal px-3 py-1.5 text-xs font-medium text-white shadow-lg transition-all duration-200 md:block",
          hovered
            ? "translate-x-0 opacity-100"
            : "translate-x-2 opacity-0",
        )}
        aria-hidden="true"
      >
        Chat with us
      </span>

      {/* ── Floating Button ───────────────────────────────── */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110 hover:shadow-xl text-white",
          mounted && "animate-pulse-once",
        )}
        style={{ backgroundColor: "#25D366" }}
      >
        <WhatsAppIcon className="h-8 w-8 fill-white text-white" />
      </a>
    </div>
  );
}

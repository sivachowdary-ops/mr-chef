/**
 * Contact — CTA + enquiry form that opens WhatsApp
 *
 * Left column:  WhatsApp button, phone link, location.
 * Right column: Simple form that composes a WhatsApp message (no backend).
 */

import { useState, type FormEvent } from "react";
import { Phone, MapPin } from "lucide-react";
import { brand, buildWhatsAppUrl } from "@/data/siteConfig";
import { packages } from "@/data/packages";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const pkgLabel = selectedPackage || "a Mr Chef franchise";
    const message = `Hi, I'm ${name} (${phone}). I'm interested in the ${pkgLabel}. Please share details.`;

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  /* ── Shared input styles ──────────────────────────────────── */
  const inputClass =
    "w-full rounded-xl border border-brand-warm-gray bg-white px-4 py-3 text-brand-charcoal placeholder:text-brand-muted/60 focus:border-brand-amber focus:ring-2 focus:ring-brand-amber/20 outline-none transition-all text-sm sm:text-base";

  return (
    <section id="contact" className="section-padding bg-brand-cream">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="section-heading font-heading">
            Ready to Start Your Food Business?
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Get in touch — we'll guide you through every step
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {/* ── Left: Contact info ───────────────────────────── */}
          <div className="flex flex-col gap-6">
            {/* WhatsApp card */}
            <div className="card-premium p-6 sm:p-8 flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-amber/10 text-brand-amber">
                  <WhatsAppIcon className="h-5 w-5 fill-brand-amber text-brand-amber" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-brand-charcoal text-lg">
                  WhatsApp
                </h3>
              </div>
              <p className="text-sm text-brand-muted leading-relaxed">
                The fastest way to reach us. Tap below to start a conversation.
              </p>
              <a
                href={buildWhatsAppUrl(brand.whatsappDefaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-1"
              >
                <WhatsAppIcon className="h-5 w-5 fill-white text-white" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Phone card */}
            <div className="card-premium p-6 sm:p-8 flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-charcoal/5 text-brand-charcoal">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-brand-charcoal text-lg">
                  Phone
                </h3>
              </div>
              <a href={brand.phoneLink} className="btn-outline">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Us: {brand.phoneFormatted}
              </a>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 px-2">
              <MapPin
                className="h-5 w-5 text-brand-amber mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <p className="text-sm text-brand-muted leading-relaxed">
                Based in{" "}
                <span className="font-medium text-brand-charcoal">
                  {brand.location}
                </span>
              </p>
            </div>
          </div>

          {/* ── Right: Enquiry form ──────────────────────────── */}
          <div className="card-premium p-6 sm:p-8">
            <h3 className="font-heading font-semibold text-brand-charcoal text-xl mb-6">
              Quick Enquiry
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-brand-charcoal mb-1.5"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ravi Kumar"
                  className={inputClass}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-sm font-medium text-brand-charcoal mb-1.5"
                >
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className={inputClass}
                />
              </div>

              {/* Package */}
              <div>
                <label
                  htmlFor="contact-package"
                  className="block text-sm font-medium text-brand-charcoal mb-1.5"
                >
                  Preferred Package
                </label>
                <select
                  id="contact-package"
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select a package…</option>
                  {packages.map((pkg) => (
                    <option key={pkg.id} value={pkg.name}>
                      {pkg.name} — {pkg.priceFormatted}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button type="submit" className="btn-whatsapp justify-center mt-2">
                <WhatsAppIcon className="h-4.5 w-4.5 fill-white text-white" aria-hidden="true" />
                Send Enquiry via WhatsApp
              </button>
            </form>

            <p className="mt-4 text-xs text-brand-muted text-center">
              This opens WhatsApp with a pre-filled message — no data is stored.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

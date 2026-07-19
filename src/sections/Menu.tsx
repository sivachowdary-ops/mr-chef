import { useState } from "react";
import { menuCategories, menuDisclaimer, menuWhatsAppPrompt } from "@/data/menu";
import { buildWhatsAppUrl } from "@/data/siteConfig";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Menu() {
  const [activeCategoryId, setActiveCategoryId] = useState(
    menuCategories[0].categoryId
  );

  const activeCategory = menuCategories.find(
    (cat) => cat.categoryId === activeCategoryId
  );

  const whatsAppUrl = buildWhatsAppUrl(
    "Hi, I have a question about the Mr Chef sample menu or want to discuss a custom menu for my outlet."
  );

  return (
    <section id="menu" className="section-padding bg-brand-bg">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-amber mb-3.5">
            What We Serve
          </span>
          <h2 className="section-heading font-heading">
            Sample <span className="text-gradient">Menu</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            A sample of popular food items a Mr Chef franchise can serve. Actual menu is fully customizable.
          </p>
        </div>

        {/* Tab Buttons Switcher (Horizontal scroll on small screens) */}
        <div className="flex justify-start md:justify-center border-b border-brand-warm-gray/60 mb-8 overflow-x-auto scrollbar-none pb-2">
          <div className="flex gap-2 px-1">
            {menuCategories.map((cat) => (
              <button
                key={cat.categoryId}
                onClick={() => setActiveCategoryId(cat.categoryId)}
                className={`px-4 py-2.5 rounded-xl font-heading text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCategoryId === cat.categoryId
                    ? "bg-brand-charcoal text-white shadow-md"
                    : "text-brand-muted hover:bg-brand-cream/60 hover:text-brand-charcoal"
                }`}
              >
                {cat.categoryName.split(" —")[0]} {/* Just the main name for tabs */}
              </button>
            ))}
          </div>
        </div>

        {/* Category Content Card */}
        <div className="max-w-3xl mx-auto card-premium p-6 sm:p-8 bg-white bg-dot-pattern">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-brand-warm-gray/60 pb-4 mb-6">
            <h3 className="font-heading text-xl font-bold text-brand-charcoal">
              {activeCategory?.categoryName}
            </h3>
            <span className="text-xs text-brand-amber font-semibold uppercase tracking-wider mt-1 sm:mt-0">
              * Fully Customizable
            </span>
          </div>

          {activeCategory && (
            <div className="flex flex-col gap-4">
              {/* If it's Waffles, display columns header */}
              {activeCategory.hasMultiPricing && (
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-brand-muted border-b border-brand-warm-gray/40 pb-2 mb-1">
                  <span className="w-1/2">Flavor</span>
                  <span className="w-1/4 text-center">Puff</span>
                  <span className="w-1/4 text-center">Double</span>
                </div>
              )}

              {activeCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border-b border-brand-warm-gray/40 last:border-b-0 pb-3 last:pb-0"
                >
                  {/* Item Name */}
                  <span className="font-medium text-brand-charcoal text-sm sm:text-base w-1/2 sm:w-2/3 leading-snug">
                    {item.name}
                  </span>

                  {/* Pricing Columns */}
                  {activeCategory.hasMultiPricing ? (
                    <div className="flex w-1/2 sm:w-1/3 justify-between font-bold text-brand-charcoal text-sm sm:text-base">
                      <span className="w-1/2 text-center text-brand-muted font-medium">
                        ₹{item.puffPrice}
                      </span>
                      <span className="w-1/2 text-center text-brand-amber font-bold">
                        ₹{item.doublePrice}
                      </span>
                    </div>
                  ) : (
                    <span className="font-bold text-brand-amber text-sm sm:text-base">
                      ₹{item.price}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Inner Disclaimer */}
          <div className="mt-8 pt-4 border-t border-brand-warm-gray/60 text-center">
            <p className="text-xs italic text-brand-muted">
              {menuDisclaimer}
            </p>
          </div>
        </div>

        {/* WhatsApp Callout Card */}
        <div className="max-w-2xl mx-auto mt-12 text-center bg-brand-cream/60 rounded-2xl p-6 sm:p-8 border border-brand-warm-gray/50">
          <p className="text-sm sm:text-base text-brand-charcoal font-medium mb-5">
            {menuWhatsAppPrompt}
          </p>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex justify-center"
          >
            <WhatsAppIcon className="h-5 w-5 fill-white text-white" />
            Discuss Menu Customization
          </a>
        </div>
      </div>
    </section>
  );
}

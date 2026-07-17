/**
 * Franchise Package Data — Single Source of Truth
 *
 * To add a new franchise category:
 * 1. Add a new object to the `packages` array below
 * 2. That's it — the Packages section and Investment Table will auto-render it
 *
 * All customizations note is rendered separately in the Packages section.
 */

export interface FranchisePackage {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  priceFormatted: string;
  dimensions: {
    height: string;
    length: string;
    width: string;
  };
  isMobile: boolean;
  wheelCount?: number;
  includes: string[];
  equipment: string[];
  specialEquipment?: string[];
  bestFor: string;
  whatsappMessage: string;
  image?: string;
  videoUrl?: string; // Placeholder for franchise model video
  estimatedDailyBusiness?: string;
  estimatedDailyProfit?: string;
  badge?: string; // e.g. "Popular", "Best Value"
}

export const packages: FranchisePackage[] = [
  {
    id: "basic-stall",
    name: "Basic Stall",
    subtitle: "Open Back Design",
    price: 80000,
    priceFormatted: "₹80,000",
    dimensions: {
      height: "6.5 ft",
      length: "6 ft",
      width: "3+ ft",
    },
    isMobile: false,
    includes: [
      "Full LED display outlet branding",
      "Interior LED farm lights",
      "Complete electrical board & wiring",
    ],
    equipment: [
      "Plastic trays",
      "KFC-style 6-litre oil fryer tray",
      "Strainer",
      "Roti/dough prep tawa",
      "Cleaning jal",
      "Onion cutter",
      "Chopping board & knife set",
      "Whisk",
      "Ladles",
      "Plastic bowls",
      "Serving plates",
      "Stoves & burners",
    ],
    bestFor: "Entry-level investors, tighter spaces",
    whatsappMessage:
      "Hi, I'm interested in the Mr Chef Basic Stall package (₹80,000). Please share more details.",
    image: "/images/store-1.webp",
    videoUrl: undefined, // [PLACEHOLDER — Client to provide Basic Stall video]
    estimatedDailyBusiness: "~₹2,000",
    estimatedDailyProfit: "~₹800 (40% margin)",
    badge: "Entry Level",
  },
  {
    id: "box-type-mid",
    name: "Box-Type Mobile Stall",
    subtitle: "Mid Model",
    price: 150000,
    priceFormatted: "₹1,50,000",
    dimensions: {
      height: "6.5 ft",
      length: "7 ft",
      width: "5 ft",
    },
    isMobile: true,
    wheelCount: 4,
    includes: [
      "6-type LED display branding",
      "Interior LED farm lights",
      "Complete electrical board & wiring",
      "Pizza oven",
      "Waffle machine",
      "Chocolate melter",
      "Full pizza-kitchen equipment set",
    ],
    equipment: [
      "Plastic trays",
      "KFC-style 6-litre oil fryer tray",
      "Strainer",
      "Roti/dough prep tawa",
      "Cleaning jal",
      "Onion cutter",
      "Chopping board & knife set",
      "Whisk",
      "Ladles",
      "Plastic bowls",
      "Serving plates",
      "Stoves & burners",
    ],
    specialEquipment: ["Pizza oven", "Waffle machine", "Chocolate melter"],
    bestFor:
      "Investors wanting a broader menu (pizza, waffles & more) and a fully mobile unit",
    whatsappMessage:
      "Hi, I'm interested in the Mr Chef Box-Type Mid Model (₹1,50,000). Please share more details.",
    image: "/images/store-4.webp",
    videoUrl: undefined, // [PLACEHOLDER — Client to provide Box-Type video]
    estimatedDailyBusiness: "Higher (multi-menu capacity)",
    estimatedDailyProfit: "Varies by menu mix",
    badge: "Popular",
  },
];

/**
 * Shared customization note displayed below all package cards.
 */
export const customizationNote =
  "All packages support full customization — layouts, equipment, branding, and pricing can be tailored to your specific requirements. Every unit is built to order, so you get exactly what your business needs. Message us on WhatsApp to discuss a custom setup.";

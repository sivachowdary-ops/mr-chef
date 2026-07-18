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
  kitchenType: string; // "Open Kitchen" or "Enclosed Kitchen"
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
    kitchenType: "Open Kitchen",
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
      "Interior LED warm lights",
      "Complete electrical board & wiring",
    ],
    equipment: [
      "Plastic trays",
      "KFC Double Decker style 6-litre oil tray",
      "Strainer — 1",
      "Roll tawa — 1",
      "Oil cleaning jal — 1",
      "Onion cutter — 1",
      "Chopping board — 1",
      "Knife set — 1",
      "Whisker — 1",
      "Tongs — 1",
      "Flour mixing bowl — 1",
      "Chicken marination boxes — 2",
      "Serving plates",
      "Stoves & burners",
    ],
    bestFor: "Entry-level investors, tighter spaces, open-air food stalls",
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
    name: "Box-Type Stall",
    subtitle: "Mid Model",
    kitchenType: "Enclosed Kitchen",
    price: 150000,
    priceFormatted: "₹1,50,000",
    dimensions: {
      height: "6.5 ft",
      length: "7 ft",
      width: "5 ft",
    },
    isMobile: false,
    includes: [
      "UV Printing 3D LED Display",
      "POP Sheet",
      "Interior LED warm lights",
      "Complete electrical board & wiring",
      "Pizza oven",
      "Waffle machine",
      "Triple Compartment Chocolate Melter",
      "Full pizza-kitchen equipment set",
    ],
    equipment: [
      "Plastic trays",
      "KFC Double Decker style 6-litre oil tray",
      "Strainer — 1",
      "Roll tawa — 1",
      "Oil cleaning jal — 1",
      "Onion cutter — 1",
      "Chopping board — 1",
      "Knife set — 1",
      "Whisker — 1",
      "Tongs — 1",
      "Flour mixing bowl — 1",
      "Chicken marination boxes — 2",
      "Serving plates",
      "Stoves & burners",
    ],
    specialEquipment: [
      "Pizza oven",
      "Waffle machine",
      "Triple Compartment Chocolate Melter",
    ],
    bestFor:
      "Investors wanting a broader menu (pizza, waffles & more) in a fully enclosed setup",
    whatsappMessage:
      "Hi, I'm interested in the Mr Chef Box-Type Stall Mid Model (₹1,50,000). Please share more details.",
    image: "/images/store-4.webp",
    videoUrl: undefined, // [PLACEHOLDER — Client to provide Box-Type video]
    estimatedDailyBusiness: "~₹2,000",
    estimatedDailyProfit: "~₹1,000 (50% margin)",
    badge: "Popular",
  },
];

/**
 * Shared customization note displayed below all package cards.
 */
export const customizationNote =
  "All packages support full customization — layouts, equipment, branding, and pricing can be tailored to your specific requirements. Every unit is built to order, so you get exactly what your business needs. Message us on WhatsApp to discuss a custom setup.";

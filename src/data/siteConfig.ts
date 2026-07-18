/**
 * Site Configuration — Central config for all site content
 *
 * Update brand info, navigation, FAQ, and section content here.
 * Components read from this file — no content is hardcoded in JSX.
 */

// ─── Brand & Contact ─────────────────────────────────────────
export const brand = {
  name: "Mr Chef",
  tagline: "Your Partner in Food Business", // [PLACEHOLDER — Confirm tagline with client]
  phone: "+91 93471 27194",
  phoneFormatted: "+91 93471 27194",
  phoneLink: "tel:+919347127194",
  whatsappNumber: "919347127194",
  whatsappBaseUrl: "https://wa.me/919347127194",
  whatsappDefaultMessage:
    "Hi, I'm interested in a Mr Chef franchise. Please share details.",
  location: "Visakhapatnam (Vizag), Andhra Pradesh",
  // [PLACEHOLDER — Do NOT make public until client confirms this is the correct public address]
  googleMapsUrl: "https://maps.app.goo.gl/h49VJGYq4jCc5eq17",
  googleMapsPublic: false, // Set to true once client confirms address is public-facing
} as const;

// ─── WhatsApp URL Builder ────────────────────────────────────
export function buildWhatsAppUrl(message: string): string {
  return `${brand.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

// ─── Navigation ──────────────────────────────────────────────
export const navItems = [
  { label: "Why Us", href: "#why-us" },
  { label: "Packages", href: "#packages" },
  { label: "Menu", href: "#menu" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

// ─── Hero Section ────────────────────────────────────────────
export const hero = {
  headline: "Own a Mr Chef Kiosk Franchise", // Specific and direct
  headlineAccent: "Zero Royalty. Double-Decker Stoves.", // Real commercial terms
  subheadline:
    "Get a fully-equipped ready-to-cook food stall with premium LED displays, custom kitchen tools, and menu customization. Fabricated in our Vizag workshop and shipped directly to you.",
  primaryCta: "Enquire Now on WhatsApp",
  secondaryCta: "View Franchise Packages",
} as const;

// ─── Why Partner Benefits ────────────────────────────────────
export interface Benefit {
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: "Percent",
    title: "0% Royalty Fees. Keep 100%.",
    description:
      "We don't take a single rupee of your sales. No franchise commission, no revenue cuts, no monthly fees.",
  },
  {
    icon: "Wrench",
    title: "Ready-to-Cook Setup",
    description:
      "Stall fabrication, UV printed 3D LED displays, warm lighting, and complete electrical wiring all included.",
  },
  {
    icon: "TrendingUp",
    title: "40% to 50% Daily Margins",
    description:
      "A ₹2,000/day business can generate approximately ₹800/day profit. Higher menu pricing increases profits.*",
  },
  {
    icon: "MapPin",
    title: "Locked Territory Rights",
    description:
      "Only one Mr Chef outlet is permitted in your designated locality to eliminate internal competition.",
  },
  {
    icon: "Truck",
    title: "Vizag Workshop Direct",
    description:
      "Stalls are fabricated at our Visakhapatnam facility and transported to you. Transport charges are billed separately.",
  },
  {
    icon: "Settings",
    title: "Custom Kitchen Layouts",
    description:
      "Need extra fryers, tawas, pizza ovens, or waffle panels? We customize the layout to match your target menu.",
  },
];

// ─── How It Works Steps ──────────────────────────────────────
export interface ProcessStep {
  step: number;
  icon: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: "MessageCircle",
    title: "WhatsApp Enquiry",
    description: "Send us a message with your preferred location and timeline.",
  },
  {
    step: 2,
    icon: "ClipboardList",
    title: "Layout & Tools Call",
    description:
      "We help you pick the right stall size and customize the kitchen equipment list.",
  },
  {
    step: 3,
    icon: "Lock",
    title: "Territory Lock-In",
    description:
      "Secure your exclusive operational zone so no other Mr Chef can open nearby.",
  },
  {
    step: 4,
    icon: "Factory",
    title: "Vizag Fabrication",
    description:
      "We fabricate your unit, install LED branding, wire the board, and arrange transport.",
  },
  {
    step: 5,
    icon: "Rocket",
    title: "Delivery & Open",
    description:
      "Your kiosk arrives, is positioned on-site, and you start cooking.",
  },
];

// ─── FAQ Items ───────────────────────────────────────────────
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Is there any royalty fee or monthly revenue share?",
    answer:
      "No. Mr Chef operates on a zero-royalty franchise model. You buy the setup and keep 100% of the profits you generate. There are no ongoing fees.",
  },
  {
    question: "What items come inside the commercial equipment list?",
    answer:
      "Each package includes heavy-duty tools like the KFC Double Decker stove, 6-litre oil trays, roll tawa, strainers, and marination boxes. Detailed tool counts are listed in the package cards.",
  },
  {
    question: "Can I customize the kitchen layout or menu items?",
    answer:
      "Yes. Every stall is fabricated to order. We can adjust the steel layout, swap equipment, or add specific tools like pizza ovens or waffle plates based on what you plan to sell.",
  },
  {
    question: "How is transport handled from Vizag?",
    answer:
      "We coordinate the loading and transport from our Visakhapatnam facility directly to your location. Transport charges are calculated based on distance and billed separately.",
  },
  {
    question: "How do I secure area exclusivity for my kiosk?",
    answer:
      "Once you select your package and place your booking, we lock in your location coordinates. We do not license or deliver any other Mr Chef unit in that local territory.",
  },
  {
    question: "What is the typical setup timeline?",
    answer:
      "Stall fabrication and wiring takes about 7 to 10 working days at our workshop. Transit times depend on your distance from Visakhapatnam.",
  },
  {
    question: "What support is provided after my kiosk opens?",
    answer:
      "We provide full equipment guidelines, custom branding graphics files, and menu consulting to help your cooks start operating efficiently from day one.",
  },
  {
    question: "What food categories are popular on the sample menu?",
    answer:
      "Our kiosks are highly optimized for fast-prep street food like veg/non-veg pizzas, crispy chicken lollipops, egg and chicken rolls, peri peri french fries, mocktails, and fresh waffles.",
  },
];

// ─── SEO Meta ────────────────────────────────────────────────
export const seoMeta = {
  title: "Mr Chef Franchise — Start Your Own Food Stall Business | 0% Royalty",
  description:
    "Own a Mr Chef food stall franchise starting at ₹80,000. Zero royalty, full setup included, area exclusivity. Compact and mobile stall options available. Enquire now.",
  ogImage: "/og-image.png", // [PLACEHOLDER — Generate or supply OG image]
  siteUrl: "https://mrchef.in", // [PLACEHOLDER — Confirm domain]
} as const;

// ─── Gallery Items (Images & Videos) ─────────────────────────
export interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  title: string;
  isLaunchVideo?: boolean;
  locationName?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    type: "image",
    src: "/images/store-1.webp",
    alt: "Mr Chef Kiosk Front View",
    title: "Basic Stall Design",
  },
  {
    id: "gal-2",
    type: "video",
    src: "/videos/launch-1.mp4",
    alt: "Franchise Launch - Location 1 Video Walkaround",
    title: "Franchise Launch Day",
    isLaunchVideo: true,
    locationName: "Location Pending",
  },
  {
    id: "gal-3",
    type: "image",
    src: "/images/store-2.webp",
    alt: "Franchisee outlet interior and tawa prep setup",
    title: "Vizag Workshop Fabrication",
  },
  {
    id: "gal-4",
    type: "image",
    src: "/images/store-3.webp",
    alt: "Compact outlet layout with LED branding close-up details",
    title: "LED Branding Detail",
  },
  {
    id: "gal-5",
    type: "video",
    src: "/videos/launch-2.mp4",
    alt: "Franchise Launch - Location 2 Video Walkaround",
    title: "Franchise Launch Day",
    isLaunchVideo: true,
    locationName: "Location Pending",
  },
  {
    id: "gal-6",
    type: "image",
    src: "/images/store-4.webp",
    alt: "Finished Box-Type stall side panels detail",
    title: "Box-Type Stall Setup",
  },
];

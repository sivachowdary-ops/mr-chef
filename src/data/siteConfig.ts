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
  headline: "Own a Mr Chef Outlet", // [PLACEHOLDER — Confirm exact tagline with client]
  headlineAccent: "Zero Royalty, Real Profit",
  subheadline:
    "Start your own food business with a fully-equipped, ready-to-operate franchise stall. Complete setup, transport & branding — all handled by us.",
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
    title: "0% Royalty — Ever",
    description:
      "No revenue-share cut, no hidden fees. Every rupee you earn stays with you.",
  },
  {
    icon: "Wrench",
    title: "Full Setup Handled",
    description:
      "Stall fabrication, LED branding, electrical wiring, equipment — all included in the package price.",
  },
  {
    icon: "TrendingUp",
    title: "Real Profit Potential",
    description:
      "A ₹2,000/day business can generate approximately ₹800/day profit at ~40% margin.*",
  },
  {
    icon: "MapPin",
    title: "Area Exclusivity",
    description:
      "One franchise per locked area — you won't compete with another Mr Chef outlet nearby.",
  },
  {
    icon: "Truck",
    title: "End-to-End Logistics",
    description:
      "Transport handled from Vizag to your location. Transportation charges are billed separately.",
  },
  {
    icon: "Settings",
    title: "Fully Customizable",
    description:
      "Every unit is built to order. Customize layout, equipment, branding, and menu to fit your vision.",
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
    title: "Enquire on WhatsApp",
    description: "Reach out to us and tell us about your requirements.",
  },
  {
    step: 2,
    icon: "ClipboardList",
    title: "Discuss Package & Customization",
    description:
      "We'll help you pick the right package and customize it for your needs.",
  },
  {
    step: 3,
    icon: "Lock",
    title: "Area Lock-In",
    description:
      "Secure your exclusive territory — your area is locked for you only.",
  },
  {
    step: 4,
    icon: "Factory",
    title: "Fabrication & Transport",
    description:
      "Your unit is built at our Vizag facility and transported to your location.",
  },
  {
    step: 5,
    icon: "Rocket",
    title: "Setup & Launch",
    description:
      "We set up your outlet at your location. You're ready to serve customers.",
  },
];

// ─── FAQ Items ───────────────────────────────────────────────
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Is there any royalty or ongoing fee?",
    answer:
      "No. Mr Chef operates on a 0% royalty model with no revenue share. Once you invest in your package, there are no recurring fees to us.",
  },
  {
    question: "What's included in the package price?",
    answer:
      "Every package includes the complete stall/kiosk unit, LED branding, electrical wiring, and a full starter kitchen equipment set. See the package details above for the exact list.",
  },
  {
    question: "Can I customize my stall?",
    answer:
      "Absolutely. Every unit is built to order. Layouts, equipment, branding, and pricing can all be tailored to your specific requirements. Discuss your ideas with us on WhatsApp.",
  },
  {
    question: "Do you handle transport and setup?",
    answer:
      "Yes, we handle setup and support end-to-end. Transportation from Vizag to your location is arranged by us, with transportation charges billed separately.",
  },
  {
    question: "Is my area exclusive to me?",
    answer:
      "Yes. We operate a strict one-franchise-per-locked-area policy. You won't have another Mr Chef outlet competing in your territory.",
  },
  {
    question: "How long does the setup take?",
    answer:
      "[PLACEHOLDER — Timeline to be confirmed by client. Reach out on WhatsApp for current timelines.]",
  },
  {
    question: "What support do I get after launch?",
    answer:
      "[PLACEHOLDER — Post-launch support details to be confirmed by client. Contact us on WhatsApp to learn about our support program.]",
  },
  {
    question: "What kind of food can I sell?",
    answer:
      "Your menu is flexible. The Basic Stall supports a range of street food items, while the Box-Type Mid Model comes equipped for pizza, waffles, and more. We can help you plan a menu suited to your location.",
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

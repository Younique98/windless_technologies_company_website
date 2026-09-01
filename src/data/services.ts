export type PricingTier = {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features: string[];
  highlight?: boolean;
};

export const webTiers: PricingTier[] = [
  {
    name: "Lump Sum",
    price: "$4,000",
    cadence: "starting at, +$25/mo hosting",
    description:
      "A 5-page custom-coded site, delivered once and yours outright.",
    features: [
      "5-page custom-coded website",
      "Basic SEO setup",
      "Lifetime updates",
      "$100 per additional page",
    ],
  },
  {
    name: "Monthly Package",
    price: "$200",
    cadence: "/mo",
    description:
      "Design, hosting, development, and support bundled into one ongoing plan.",
    features: [
      "Design, hosting, and development included",
      "Unlimited edits",
      "Full technical support",
      "Lifetime updates",
    ],
    highlight: true,
  },
  {
    name: "E-commerce Package",
    price: "$7,000",
    cadence: "starting at",
    description:
      "Custom Shopify build or a fully custom storefront, built to sell.",
    features: [
      "Custom Shopify or fully custom build",
      "Payment and shipping integration",
      "Editable CMS for your team",
      "Built for speed, security, and scale",
    ],
  },
];

export const mobileTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "$10,000",
    cadence: "8 weeks",
    description:
      "Best for startups and small businesses that want a simple, functional app.",
    features: [
      "Core functionality",
      "Pre-defined UI templates",
      "App store submission (iOS + Android)",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Standard",
    price: "$15,000",
    cadence: "10 weeks",
    description:
      "Best for mid-sized businesses that need custom branding and integrations.",
    features: [
      "Custom UI/UX design",
      "Push notifications",
      "API integrations (payment gateways, etc.)",
      "Offline storage and basic analytics",
      "3 rounds of revisions",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$20,000",
    cadence: "16 weeks",
    description:
      "Best for businesses and enterprises that need robust, real-time functionality.",
    features: [
      "Real-time collaboration (chat, file sharing)",
      "Advanced analytics dashboards",
      "Cloud storage integration (AWS/Firebase)",
      "Custom animations",
      "3 months of post-launch support",
    ],
  },
];

export type AddOn = {
  name: string;
  price: string;
};

export const addOns: AddOn[] = [
  { name: "Custom Blog Integration", price: "$500" },
  { name: "Advanced SEO", price: "$300/mo" },
  { name: "Google Ads Setup", price: "$750" },
  { name: "Hosting & Maintenance", price: "from $50/mo" },
];

export type WhyPoint = {
  label: string;
  description: string;
};

export const whyCustomCode: WhyPoint[] = [
  {
    label: "Faster load times",
    description:
      "No page-builder runtime or bloated theme files to load. Custom-coded pages ship in under a second.",
  },
  {
    label: "Better security",
    description:
      "No third-party plugin ecosystem means no third-party plugin vulnerabilities. The surface area you're exposed to is code we wrote and understand.",
  },
  {
    label: "SEO-ready by default",
    description:
      "Clean, semantic HTML, CSS, and JavaScript that search engines and AI crawlers can actually read - no builder-generated markup to work around.",
  },
  {
    label: "Built to scale",
    description:
      "Architecture that grows with the business, instead of a template you'll eventually outgrow and rebuild from scratch.",
  },
];

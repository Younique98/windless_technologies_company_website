export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  price: string;
  timeline: string;
  summary: string;
  benefits: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "lunar-mart",
    name: "Lunar Mart",
    category: "E-commerce Platform",
    price: "$8,500",
    timeline: "Delivered in 6 weeks",
    summary:
      "A sleek, scalable e-commerce platform built for small businesses to sell online. Fully integrated payment processing, inventory management, and shipping services - built for speed, security, and ease of use.",
    benefits: [
      "Custom, brand-tailored design",
      "Mobile-friendly from the ground up",
      "Built-in product, order, and payment management tools",
      "SEO-optimized",
    ],
  },
  {
    slug: "orbit-crm",
    name: "Orbit CRM",
    category: "Custom CRM",
    price: "$12,000",
    timeline: "Delivered in 8 weeks",
    summary:
      "A custom CRM built for service-based businesses to streamline customer interactions, track leads, and manage workflows. A user-friendly dashboard, analytics, and a GraphQL API integration tie it together.",
    benefits: [
      "Organized client and project tracking",
      "Intuitive dashboard",
      "Growth analytics",
      "Scalable as the business grows",
    ],
  },
  {
    slug: "stellar-app",
    name: "Stellar App",
    category: "Mobile App",
    price: "$20,000",
    timeline: "Delivered in 12 weeks",
    summary:
      "A cross-platform task management and collaboration app with real-time notifications, file sharing, and a modern UI/UX built for daily use.",
    benefits: [
      "Native-feeling on Android and iOS",
      "Intuitive interface",
      "Real-time collaboration tools",
      "Custom branding",
    ],
  },
];

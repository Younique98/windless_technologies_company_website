export const MISSION =
  "Empower businesses and aspiring technologists by delivering scalable, innovative, high-quality technology solutions while fostering an environment where professionals gain real-world experience and grow their expertise.";

export const VISION =
  "To be a leader in IT consulting and engineering talent development, bridging the gap between business needs and skilled technologists while creating meaningful, lasting impact through technology.";

export type CoreValue = {
  name: string;
  description: string;
};

export const CORE_VALUES: CoreValue[] = [
  {
    name: "Excellence in Execution",
    description: "We hold our work to a high standard, from the first line of code to final delivery.",
  },
  {
    name: "Collaboration & Inclusivity",
    description: "We build as a team - with clients and with the technologists we mentor.",
  },
  {
    name: "Integrity & Transparency",
    description: "Clear pricing, honest timelines, and straight answers.",
  },
  {
    name: "Continuous Learning",
    description: "Technology moves fast; we invest in staying sharp and passing that forward.",
  },
  {
    name: "Client Success & Impact",
    description: "We measure our work by the outcomes it creates for the businesses we serve.",
  },
];

export type LeadershipMember = {
  name: string;
  role: string;
  bio: string;
};

export const LEADERSHIP: LeadershipMember[] = [
  {
    name: "Erica",
    role: "Founder & CEO",
    bio: "A visionary leader with a passion for tech, innovation, and mentorship.",
  },
  {
    name: "William",
    role: "Co-Founder & COO",
    bio: "An expert in administrative and operational functions.",
  },
];

export const OPEN_LEADERSHIP_ROLES = ["Lead Engineer", "Product Designer"];

export type WhyPoint = {
  name: string;
  description: string;
};

export const WHY_WINDLESS: WhyPoint[] = [
  {
    name: "Industry Expertise",
    description: "Custom-coded software across web, e-commerce, and mobile, built without shortcuts.",
  },
  {
    name: "Client-Centric Approach",
    description: "Transparent pricing and direct communication from proposal through delivery.",
  },
  {
    name: "Scalability & Reliability",
    description: "Architecture built to grow with your business, not be outgrown by it.",
  },
  {
    name: "Cutting-Edge Technologies",
    description: "Modern frameworks and tooling chosen for the project, not a one-size-fits-all template.",
  },
  {
    name: "Community & Growth",
    description: "A supportive ecosystem where talent develops and thrives, through our internship program.",
  },
];

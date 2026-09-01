export type InternshipTrack = {
  name: string;
  summary: string;
  highlights: string[];
};

export const INTERNSHIP_TRACKS: InternshipTrack[] = [
  {
    name: "Software Engineering Internship",
    summary: "Web and mobile development on live client projects.",
    highlights: [
      "Real web and mobile development work",
      "Agile / GitHub workflows",
      "CI/CD pipelines",
      "Daily async stand-ups, weekly project check-ins",
    ],
  },
  {
    name: "UI/UX Design Internship",
    summary: "User research and design systems for client projects.",
    highlights: [
      "User research and wireframing",
      "Figma and shadcn",
      "Design systems and branding for real clients",
      "Daily async stand-ups, weekly project check-ins",
    ],
  },
];

export type StructurePoint = {
  label: string;
  detail: string;
};

export const STRUCTURE: StructurePoint[] = [
  { label: "Length", detail: "12–16 weeks, flexible" },
  { label: "Commitment", detail: "Minimum 5–10 hours per week" },
  { label: "Compensation", detail: "Unpaid, in exchange for real project experience" },
  {
    label: "What you get",
    detail:
      "A resume- and LinkedIn-listable role, mentorship, and - for strong performers - a performance-based letter of recommendation and LinkedIn endorsement",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const CAREERS_FAQ: FaqItem[] = [
  {
    question: "Is the internship paid?",
    answer:
      "No - it's unpaid, in exchange for real project experience, a professional reference and LinkedIn endorsement for strong performers, and a listable resume credential.",
  },
  {
    question: "Can I list Windless Technologies on my resume?",
    answer: "Yes, upon completing your assigned work.",
  },
  {
    question: "Will I get a job offer afterward?",
    answer:
      "It's not guaranteed, but high performers may be considered for future paid contract or full-time roles as the company scales.",
  },
  {
    question: "What if I don't complete the internship?",
    answer:
      "Stopping without notice forfeits the reference. Withdrawing professionally, with communication, keeps the door open to reapply in a future cohort.",
  },
  {
    question: "What's the code of conduct?",
    answer:
      "Professional and respectful conduct is expected at all times, with zero tolerance for discrimination, harassment, or toxicity.",
  },
];

export const PROJECT_TYPES = [
  "Web Design & Development",
  "Mobile App Development",
  "E-commerce",
  "Something else",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 120;
const MAX_COMPANY = 160;
const MAX_MESSAGE = 4000;
const MIN_MESSAGE = 10;

// Strips control characters (including embedded newlines used for header
// injection in naive mailers) and caps length. Values are passed to the
// Resend API as structured params, not raw SMTP headers, so this is input
// hygiene rather than the only thing standing between us and injection.
export function clean(value: string): string {
  return value.replace(/[\x00-\x1F\x7F]/g, "").trim();
}

export function validateContactForm(
  input: Partial<Record<keyof ContactFormValues, unknown>>,
): { values: ContactFormValues; errors: ContactFormErrors } {
  const errors: ContactFormErrors = {};

  const rawName = typeof input.name === "string" ? clean(input.name) : "";
  const rawEmail = typeof input.email === "string" ? clean(input.email) : "";
  const rawCompany = typeof input.company === "string" ? clean(input.company) : "";
  const rawProjectType =
    typeof input.projectType === "string" ? clean(input.projectType) : "";
  const rawMessage = typeof input.message === "string" ? clean(input.message) : "";

  if (!rawName) {
    errors.name = "Please tell us your name.";
  } else if (rawName.length > MAX_NAME) {
    errors.name = `Name must be ${MAX_NAME} characters or fewer.`;
  }

  if (!rawEmail) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(rawEmail) || rawEmail.length > 254) {
    errors.email = "Please enter a valid email address.";
  }

  if (rawCompany.length > MAX_COMPANY) {
    errors.company = `Company must be ${MAX_COMPANY} characters or fewer.`;
  }

  if (!rawProjectType) {
    errors.projectType = "Please select a project type.";
  } else if (!PROJECT_TYPES.includes(rawProjectType as ProjectType)) {
    errors.projectType = "Please choose a project type from the list.";
  }

  if (!rawMessage) {
    errors.message = "Please add a few details about your project.";
  } else if (rawMessage.length < MIN_MESSAGE) {
    errors.message = `Please add at least ${MIN_MESSAGE} characters.`;
  } else if (rawMessage.length > MAX_MESSAGE) {
    errors.message = `Message must be ${MAX_MESSAGE} characters or fewer.`;
  }

  return {
    values: {
      name: rawName,
      email: rawEmail,
      company: rawCompany,
      projectType: rawProjectType,
      message: rawMessage,
    },
    errors,
  };
}

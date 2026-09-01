import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { isRateLimited } from "@/lib/rateLimit";
import { validateContactForm } from "@/lib/validation";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { values, errors } = validateContactForm(body as Record<string, unknown>);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Please fix the highlighted fields.", errors }, {
      status: 400,
    });
  }

  const { name, email, company, projectType, message } = values;

  const toAddress = process.env.CONTACT_TO_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || !toAddress) {
    // Not configured yet - log instead of silently dropping the submission,
    // so nothing is lost before real credentials are added. See README for
    // what's needed to go live.
    console.warn("[contact] RESEND_API_KEY / CONTACT_TO_EMAIL not set - submission not delivered:", {
      name,
      email,
      company: company || "(not provided)",
      projectType,
      message,
    });
    return NextResponse.json(
      {
        error:
          "Thanks - your message was received, but email delivery isn't configured yet. We'll be in touch shortly.",
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Windless Technologies <onboarding@resend.dev>",
      to: toAddress,
      replyTo: email,
      subject: `New project inquiry from ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        `Project type: ${projectType}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });
    return NextResponse.json({ message: "Message sent" }, { status: 201 });
  } catch (error) {
    console.error(
      `[contact] Failed to send: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 500 },
    );
  }
}

// Anything but POST is not supported on this endpoint.
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}

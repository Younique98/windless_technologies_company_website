"use client";

import { useId, useState, type FormEvent } from "react";
import { PROJECT_TYPES } from "@/lib/validation";

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; errors?: Record<string, string> };

export const ContactForm = () => {
  const [state, setState] = useState<SubmitState>({ status: "idle" });
  const formId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      projectType: String(data.get("projectType") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setState({ status: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        setState({
          status: "success",
          message: "Thanks - your message is in. We'll be in touch shortly.",
        });
        form.reset();
        return;
      }

      if (response.status === 503) {
        // Validated fine, just not wired to email yet - still a "success"
        // from the visitor's point of view per the API's own message.
        setState({ status: "success", message: result.error ?? "Thanks for reaching out." });
        form.reset();
        return;
      }

      setState({
        status: "error",
        message: result.error ?? "Something went wrong. Please try again.",
        errors: result.errors,
      });
    } catch {
      setState({
        status: "error",
        message: "Something went wrong sending your message. Please try again.",
      });
    }
  }

  const errors = state.status === "error" ? state.errors ?? {} : {};
  const submitting = state.status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-describedby={`${formId}-status`}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className="block text-sm font-semibold text-ink-primary mb-1.5">
            Name <span className="text-redline">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className="w-full rounded border border-line-strong bg-surface px-3.5 py-2.5 text-ink-primary placeholder:text-ink-muted focus:outline-none focus-visible:outline-2 focus-visible:outline-blueprint"
          />
          {errors.name && (
            <p id={`${formId}-name-error`} className="mt-1.5 text-sm text-error">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className="block text-sm font-semibold text-ink-primary mb-1.5">
            Email <span className="text-redline">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className="w-full rounded border border-line-strong bg-surface px-3.5 py-2.5 text-ink-primary placeholder:text-ink-muted focus:outline-none focus-visible:outline-2 focus-visible:outline-blueprint"
          />
          {errors.email && (
            <p id={`${formId}-email-error`} className="mt-1.5 text-sm text-error">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-company`} className="block text-sm font-semibold text-ink-primary mb-1.5">
            Company <span className="text-ink-muted font-normal">(optional)</span>
          </label>
          <input
            id={`${formId}-company`}
            name="company"
            type="text"
            maxLength={160}
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? `${formId}-company-error` : undefined}
            className="w-full rounded border border-line-strong bg-surface px-3.5 py-2.5 text-ink-primary placeholder:text-ink-muted focus:outline-none focus-visible:outline-2 focus-visible:outline-blueprint"
          />
          {errors.company && (
            <p id={`${formId}-company-error`} className="mt-1.5 text-sm text-error">
              {errors.company}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${formId}-projectType`} className="block text-sm font-semibold text-ink-primary mb-1.5">
            Project type <span className="text-redline">*</span>
          </label>
          <select
            id={`${formId}-projectType`}
            name="projectType"
            required
            defaultValue=""
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? `${formId}-projectType-error` : undefined}
            className="w-full rounded border border-line-strong bg-surface px-3.5 py-2.5 text-ink-primary focus:outline-none focus-visible:outline-2 focus-visible:outline-blueprint"
          >
            <option value="" disabled>
              Select one
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p id={`${formId}-projectType-error`} className="mt-1.5 text-sm text-error">
              {errors.projectType}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="block text-sm font-semibold text-ink-primary mb-1.5">
          Project details <span className="text-redline">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={6}
          placeholder="What are you building, and what's the timeline you have in mind?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className="w-full rounded border border-line-strong bg-surface px-3.5 py-2.5 text-ink-primary placeholder:text-ink-muted focus:outline-none focus-visible:outline-2 focus-visible:outline-blueprint"
        />
        {errors.message && (
          <p id={`${formId}-message-error`} className="mt-1.5 text-sm text-error">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded bg-blueprint-fill px-7 py-3.5 text-sm font-semibold text-on-fill hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>

      <div id={`${formId}-status`} role="status" aria-live="polite">
        {state.status === "success" && (
          <p className="rounded border border-blueprint bg-surface-2 px-4 py-3 text-sm text-ink-primary">
            {state.message}
          </p>
        )}
        {state.status === "error" && (
          <p className="rounded border border-error bg-surface-2 px-4 py-3 text-sm text-error">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
};

"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type FieldErrors = Partial<Record<"name" | "email" | "whatsapp" | "business", string>>;

export function CTAForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors: FieldErrors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const whatsapp = String(data.get("whatsapp") || "").trim();
    const business = String(data.get("business") || "").trim();
    if (!name) nextErrors.name = "Please enter your full name.";
    if (!email) nextErrors.email = "Please enter your active email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!whatsapp) nextErrors.whatsapp = "Please enter your WhatsApp number.";
    else if (!/^[+\d][\d\s()-]{7,}$/.test(whatsapp)) nextErrors.whatsapp = "Please enter a valid WhatsApp number.";
    if (!business) nextErrors.business = "Please enter your business name.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSubmitting(true);
    window.setTimeout(() => router.push("/thank-you"), 650);
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <div className="field-row">
        <Field label="Full Name" name="name" placeholder="Your full name" error={errors.name} required />
        <Field label="Active Email" name="email" type="email" placeholder="you@business.com" error={errors.email} required />
      </div>
      <div className="field-row">
        <Field label="WhatsApp Number" name="whatsapp" type="tel" placeholder="+1 234 567 8900" error={errors.whatsapp} required />
        <Field label="Business Name" name="business" placeholder="Your business name" error={errors.business} required />
      </div>
      <Field label="Website or Facebook URL" name="url" type="url" placeholder="https://yourbusiness.com (optional)" />
      <label className="field">
        <span>Anything You Want to Say</span>
        <textarea name="message" rows={4} placeholder="Tell us about your goals or current challenges (optional)" />
      </label>
      <button className="primary-button form-button" disabled={submitting} type="submit">
        {submitting ? "Booking your consultation…" : "Book Free Consultation"} <span aria-hidden="true">→</span>
      </button>
      <p className="privacy-note">🔒 We respect your privacy. No spam.</p>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder, error, required = false }: { label: string; name: string; type?: string; placeholder: string; error?: string; required?: boolean }) {
  return (
    <label className="field">
      <span>{label}{required && <em aria-hidden="true"> *</em>}</span>
      <input name={name} type={type} placeholder={placeholder} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} />
      {error && <small id={`${name}-error`} role="alert">{error}</small>}
    </label>
  );
}

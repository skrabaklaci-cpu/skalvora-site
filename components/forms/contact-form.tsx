"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import type { Language } from "@/lib/language";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
  interest: "Workflow Audit" | "Workshops" | "Automations";
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
  interest: "Workflow Audit"
};

export function ContactForm({ language }: { language: Language }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const t = {
    title: language === "hu" ? "Kapcsolatfelvétel" : "Request a conversation",
    name: language === "hu" ? "Név" : "Name",
    email: language === "hu" ? "Munkahelyi email" : "Work email",
    company: language === "hu" ? "Cég" : "Company",
    interest: language === "hu" ? "Elsődleges érdeklődési terület" : "Primary interest",
    message:
      language === "hu"
        ? "Mi lassítja leginkább most a csapatotokat?"
        : "What is slowing your team down right now?",
    sending: language === "hu" ? "Küldés..." : "Sending...",
    send: language === "hu" ? "Kérés elküldése" : "Send request",
    success:
      language === "hu"
        ? "Köszönjük. Megkaptuk az üzenetet, és egy munkanapon belül válaszolunk."
        : "Thanks. We received your request and will reply within one business day.",
    error:
      language === "hu"
        ? "Hiba történt. Kérlek írj közvetlenül: hello@skalvora.com"
        : "Something went wrong. Please email us directly at hello@skalvora.com.",
    validation: {
      name: language === "hu" ? "A név megadása kötelező." : "Name is required.",
      email: language === "hu" ? "Az email megadása kötelező." : "Email is required.",
      emailFormat:
        language === "hu" ? "Kérlek adj meg egy érvényes email címet." : "Please enter a valid email.",
      message:
        language === "hu"
          ? "Kérlek írj legalább 20 karaktert, hogy pontosan tudjunk segíteni."
          : "Please share at least 20 characters so we can help properly."
    },
    interestLabels: {
      "Workflow Audit": language === "hu" ? "Workflow audit" : "Workflow Audit",
      Workshops: language === "hu" ? "Workshopok" : "Workshops",
      Automations: language === "hu" ? "Automatizációk" : "Automations"
    }
  };

  function validate() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) nextErrors.name = t.validation.name;
    if (!form.email.trim()) nextErrors.email = t.validation.email;
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = t.validation.emailFormat;
    }
    if (!form.message.trim() || form.message.trim().length < 20) {
      nextErrors.message = t.validation.message;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    try {
      setStatus("loading");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Request failed.");
      }

      setStatus("success");
      setForm(initialState);
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-4 rounded-xl2 border border-border bg-surface p-6 shadow-card"
    >
      <h2 className="text-xl font-semibold">{t.title}</h2>

      <label className="block">
        <span className="mb-1 block text-sm font-medium">{t.name}</span>
        <input
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
          className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm outline-none ring-accent/30 focus:ring"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? (
          <p id="name-error" className="mt-1 text-xs text-accent">
            {errors.name}
          </p>
        ) : null}
      </label>

      <label className="block">
        <span className="mb-1 block text-sm font-medium">{t.email}</span>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
          className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm outline-none ring-accent/30 focus:ring"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email ? (
          <p id="email-error" className="mt-1 text-xs text-accent">
            {errors.email}
          </p>
        ) : null}
      </label>

      <label className="block">
        <span className="mb-1 block text-sm font-medium">{t.company}</span>
        <input
          value={form.company}
          onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
          className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm outline-none ring-accent/30 focus:ring"
        />
      </label>

      <label className="block">
        <span className="mb-1 block text-sm font-medium">{t.interest}</span>
        <select
          value={form.interest}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              interest: e.target.value as FormState["interest"]
            }))
          }
          className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm outline-none ring-accent/30 focus:ring"
        >
          {Object.entries(t.interestLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-1 block text-sm font-medium">{t.message}</span>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm outline-none ring-accent/30 focus:ring"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-xs text-accent">
            {errors.message}
          </p>
        ) : null}
      </label>

      <Button type="submit" fullWidth disabled={status === "loading"}>
        {status === "loading" ? t.sending : t.send}
      </Button>

      {status === "success" ? <p className="text-sm text-green-700">{t.success}</p> : null}
      {status === "error" ? <p className="text-sm text-accent">{t.error}</p> : null}
    </form>
  );
}

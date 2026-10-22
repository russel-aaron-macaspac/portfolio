"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setError("Contact form is not configured yet. Add the Web3Forms access key to the environment variables.");
      return;
    }

    formData.set("access_key", accessKey);
    formData.set("subject", "New portfolio contact message");
    formData.set("from_name", "Portfolio contact form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "The message could not be sent.");
      }

      form.reset();
      setStatus("success");
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError instanceof Error ? submissionError.message : "The message could not be sent.");
    }
  }

  return <form onSubmit={handleSubmit} className="card p-6 sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm text-slate-300">Name<input name="name" required className="focus-ring mt-2 w-full rounded border border-slate-700 bg-slate-950 px-4 py-3 text-white" /></label><label className="text-sm text-slate-300">Email<input name="email" type="email" required className="focus-ring mt-2 w-full rounded border border-slate-700 bg-slate-950 px-4 py-3 text-white" /></label></div><label className="mt-5 block text-sm text-slate-300">Message<textarea name="message" required rows={6} className="focus-ring mt-2 w-full rounded border border-slate-700 bg-slate-950 px-4 py-3 text-white" /></label><button type="submit" disabled={status === "sending"} className="focus-ring mt-5 rounded bg-electric px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60">{status === "sending" ? "Sending..." : "Send message"}</button>{status === "success" && <p className="mt-4 text-sm text-emerald-400" role="status">Your message was sent successfully.</p>}{status === "error" && <p className="mt-4 text-sm text-red-400" role="alert">{error}</p>}</form>;
}

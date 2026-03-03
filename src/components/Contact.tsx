/**
 * Contact — "Start Your Practice Website" section (id="contact").
 * Form submits to Formspree; submissions are sent to the owner's email. AJAX submit so user stays on page.
 */
import React, { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdalvob";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-bl from-slate-900 via-slate-800/90 to-slate-900 relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center bg-slate-800/80 border border-slate-700 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">Start Your Practice Website</h2>
        <p className="mb-8">
          If you're preparing to launch or upgrade your practice website, let's
          discuss your goals.
        </p>
        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-4 text-left"
        >
          {/* Form field names match Formspree expectations for email notifications */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full p-3 border border-slate-600 rounded bg-slate-800/50 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 border border-slate-600 rounded bg-slate-800/50 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="text"
            name="practiceType"
            placeholder="Practice Type"
            className="w-full p-3 border border-slate-600 rounded bg-slate-800/50 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="w-full p-3 border border-slate-600 rounded bg-slate-800/50 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
          />
          {status === "success" && (
            <p className="text-teal-400 text-sm">Thanks! I’ll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">Something went wrong. Please try again or email me directly.</p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full text-white p-3 rounded shadow bg-gradient-to-r from-teal-500 to-orange-400 hover:opacity-90 transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending…" : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;


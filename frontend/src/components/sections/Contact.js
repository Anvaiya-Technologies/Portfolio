import React, { useState } from "react";

/**
 * Contact component that only embeds a Google Form (Google Forms UI).
 *
 * Usage:
 * 1. Create your form at https://forms.google.com.
 * 2. Click "Send" -> "<>" (embed) and copy the iframe src URL (it looks like:
 *    https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true).
 * 3. Set that URL in an environment variable named REACT_APP_GOOGLE_FORM_URL
 *    or replace the default below.
 *
 * Notes:
 * - The Google Form handles validation and submission on Google's side.
 * - Some browsers or privacy extensions may block cross-domain iframes. A direct
 *   link fallback is provided so users can open the form in a new tab.
 */

const Contact = () => {
  // You can set this in your .env as:
  // REACT_APP_GOOGLE_FORM_URL="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
  const GOOGLE_FORM_URL = process.env.REACT_APP_GOOGLE_FORM_URL || "https://docs.google.com/forms/d/e/1FAIpQLSfpQOufdCbssXsZ5ybMvGa-P_MDEpxWUI2elOxp9WmEBR1T1Q/viewform?usp=dialog_embedded=true";

  const isPlaceholder = GOOGLE_FORM_URL.includes("YOUR_FORM_ID") || GOOGLE_FORM_URL.trim() === "";

  return (
    <section id="contact" className="relative py-20 bg-transparent text-white">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
        <p className="text-lg text-white/90 mb-6">
          We use Google Forms for messages — fill it out below.
        </p>

        <div className="relative z-10 max-w-4xl mx-auto bg-white/5 p-4 rounded-2xl border border-white/10">
          <div className="mb-3 text-sm text-white/80">
            Embedded Google Form — it will use Google Forms' UI and handle validation/submission.
          </div>

          {isPlaceholder ? (
            <div className="p-6 bg-rose-800/10 rounded-lg border border-rose-400/10 text-rose-300">
              <p className="mb-2">No Google Form configured yet.</p>
              <p className="text-sm text-white/70">
                To embed your form, set the environment variable REACT_APP_GOOGLE_FORM_URL to the embed
                URL from Google Forms (the src attribute, it should include "embedded=true"), then restart
                your dev server. Example:
              </p>
              <pre className="mt-3 p-3 bg-black/30 text-xs rounded">{`REACT_APP_GOOGLE_FORM_URL="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"`}</pre>
            </div>
          ) : (
            <>
              <div className="w-full" style={{ minHeight: 500 }}>
                <iframe
                  title="Google Form"
                  src={GOOGLE_FORM_URL}
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="rounded-lg border border-white/10"
                  allowFullScreen
                >
                  Loading…
                </iframe>
              </div>

              <div className="mt-4 text-sm text-white/70">
                If the embedded form does not appear, open it in a new tab:
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-cyan-300 hover:underline"
                >
                  Open Google Form
                </a>
              </div>

              <p className="mt-3 text-xs text-white/60">
                Note: Some browsers or extensions block third-party iframes. If your users report issues,
                consider linking directly to the form or instructing them to disable the blocking extension
                for your site.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
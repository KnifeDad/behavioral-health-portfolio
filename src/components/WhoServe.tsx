/**
 * WhoServe — "Who I Serve" section (id="about"). Intro copy + bullet list of client types.
 */
import React from "react";

const WhoServe = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Who I Serve</h2>
        <div className="md:flex md:space-x-12">
          <p className="md:w-1/2 mb-6 md:mb-0 text-slate-300">
            I specialize in building websites for independent therapists,
            PMHNPs, and small behavioral health practices. Whether you're
            launching your first private practice or upgrading an existing
            website, I create designs that build trust, improve clarity, and
            convert visitors into clients.
          </p>
          <ul className="md:w-1/2 space-y-2 list-disc list-inside text-slate-200">
            <li>Licensed Therapists (LCSW, LPC, LMFT, etc.)</li>
            <li>Psychiatric Nurse Practitioners (PMHNP-BC)</li>
            <li>Solo and Small Group Practices</li>
            <li>Telehealth-Based Practices</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoServe;


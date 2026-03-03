/**
 * Process — Four-step workflow section with numbered gradient circles.
 */
import React from "react";

const steps = [
  "Consultation – clarify services and infrastructure",
  "Structure & Design – create clean layout",
  "Build & Review – client feedback and revisions",
  "Launch – deploy, mobile-optimized, search-ready",
];

const Process = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800/80 to-slate-900 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Process</h2>
        <div className="md:flex md:space-x-6">
          {steps.map((step, i) => (
            <div key={i} className="md:w-1/4 text-center mb-6 md:mb-0">
              {/* Step number in teal–orange gradient circle */}
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-teal-500 to-orange-400 text-white flex items-center justify-center mb-2 font-bold">
                {i + 1}
              </div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;


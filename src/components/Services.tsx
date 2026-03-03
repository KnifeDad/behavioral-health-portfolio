/**
 * Services — "Services & Packages" section (id="services"). Two pricing cards:
 * Solo Practice Launch and Full Practice Website, each with disclaimer re: EHR/domain/etc.
 */
import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Services &amp; Packages</h2>
        <div className="md:flex md:space-x-6">
          {/* Solo Practice — one-page, lower price point */}
          <div className="md:w-1/2 border border-slate-700 bg-slate-800/80 p-6 rounded-xl shadow mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">Solo Practice Launch</h3>
            <p className="mb-4">
              Starting at $2,000 - Ideal for clinicians launching a lean private
              practice.
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Custom one-page design</li>
              <li>Anchored section navigation</li>
              <li>About section</li>
              <li>Contact form integration</li>
              <li>Mobile optimization</li>
              <li>Basic SEO setup</li>
              <li>Deployment assistance</li>
              <li>30-day post-launch support</li>
            </ul>
            <p className="text-sm text-slate-300">
              EHR, scheduling systems, domain and other third-party platforms are purchased by
              the client and integrated as needed.
            </p>
          </div>
          {/* Full Practice — multi-page, higher price point */}
          <div className="md:w-1/2 border border-slate-700 bg-slate-800/80 p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-2">Full Practice Website</h3>
            <p className="mb-4">
              Starting at $3,200 - Perfect for practices needing multiple pages
              and structured growth.
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Multi-page custom website</li>
              <li>Structured navigation</li>
              <li>Dedicated service pages</li>
              <li>FAQ/resources section</li>
              <li>Contact &amp; intake workflow</li>
              <li>Mobile optimization</li>
              <li>Basic SEO setup</li>
              <li>Deployment assistance</li>
              <li>30-day post-launch support</li>
            </ul>
            <p className="text-sm text-slate-300">
              EHR, scheduling systems, domain and other third-party platforms are purchased by
              the client and integrated as needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


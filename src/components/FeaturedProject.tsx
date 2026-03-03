/**
 * FeaturedProject — Portfolio section (id="portfolio"). Two project cards:
 * 1) FHCL Psychiatry (solo/single-page example), 2) The Bloom Room Therapy (full practice example).
 */
import React from "react";

const FeaturedProject = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-bl from-slate-900 via-slate-800/90 to-slate-900 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Featured Project</h2>
        {/* Card 1: FHCL Psychiatry */}
        <div className="md:flex md:space-x-12 items-center bg-slate-800/80 border border-slate-700 rounded-2xl p-8 mb-12">
          <img
            src="/FHCLpsychiatry.png"
            alt="FHCL Psychiatry website screenshot"
            className="md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 object-cover"
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-2">FHCL Psychiatry</h3>
            <p className="mb-4">
              Custom-built website for an independent psychiatric provider.
              Designed as a modern single-page practice site with anchored
              navigation and clear service presentation.
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Responsive, mobile-first design</li>
              <li>Structured service sections</li>
              <li>Contact workflow integration</li>
              <li>Deployed hosting environment</li>
              <li>Basic SEO structure</li>
            </ul>
            <a
              href="https://fhclpsychiatry.com/"
              className="px-6 py-3 rounded text-white shadow bg-gradient-to-r from-teal-500 to-orange-400 hover:opacity-90 transition"
            >
              Visit Live Site
            </a>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">Full Practice Website Example</h2>
        {/* Card 2: The Bloom Room Therapy */}
        <div className="md:flex md:space-x-12 items-center bg-slate-800/80 border border-slate-700 rounded-2xl p-8">
          <img
            src="/TheBloomRoomTherapy.png"
            alt="The Bloom Room Therapy website screenshot"
            className="md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 object-cover"
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-2">The Bloom Room Therapy</h3>
            <p className="mb-4">
              Full multi-page website for The Bloom Room Therapy Group—therapy for
              teens, adults, and couples in San Clemente and Redondo Beach, CA.
              Includes team pages, service pages, and scheduling.
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Multi-page custom website</li>
              <li>Structured navigation</li>
              <li>Dedicated service pages</li>
              <li>Meet the team &amp; office info</li>
              <li>Contact &amp; scheduling workflow</li>
              <li>Mobile optimization and SEO</li>
            </ul>
            <a
              href="https://www.celynnaharnetiauxtherapy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded text-white shadow bg-gradient-to-r from-teal-500 to-orange-400 hover:opacity-90 transition"
            >
              Visit Live Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;


/**
 * Hero — Top section: name, headline (gradient on key phrases), subtext, CTA, and circular profile image.
 */
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800/80 to-slate-900 px-6 pt-24 md:pt-28 relative z-10">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* TEXT COLUMN */}
        <div className="order-2 md:order-1 text-center md:text-left">
          {/* Name with Gradient */}
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
            Guy Ricketts
          </h1>

          {/* Main Headline */}
          <h2 className="mt-6 text-3xl sm:text-4xl font-semibold leading-tight text-slate-50">
            Professional Websites for{" "}
            <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              Independent Therapists
            </span>{" "}
            &amp;{" "}
            <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              Psychiatric Providers
            </span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-lg text-slate-300 max-w-xl mx-auto md:mx-0">
            I design modern, secure, client-centered websites tailored
            specifically for small behavioral health practices ready to grow.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-xl text-lg font-medium text-white shadow-lg bg-gradient-to-r from-teal-500 to-orange-400 hover:opacity-90 transition"
            >
              Start Your Project
            </a>
          </div>
        </div>

        {/* IMAGE COLUMN */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Soft Gradient Glow Behind Image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-200 to-orange-200 blur-2xl opacity-40"></div>

            <img
              src="/popartprofilepic.jpg"
              alt="Guy Ricketts"
              className="relative w-full h-full rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.15)] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


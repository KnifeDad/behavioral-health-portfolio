/**
 * Testimonials — Client quotes in an auto-advancing carousel (15s, infinite loop).
 */
import React, { useState, useEffect } from "react";

const INTERVAL_MS = 15_000;

const testimonials = [
  {
    quote: `Working with Guy was one of the best decisions I made for my practice. He took the vision I had for FHCL Psychiatry and transformed it into something even more beautiful, calming, and professional than I could have imagined. Since launching the website, our client volume has grown so significantly that we have expanded our practice and brought on an additional PMHNP-BC provider.

Throughout the entire process, Guy was attentive, collaborative, responsive, and incredibly easy to work with. He communicated consistently, delivered everything on time, and genuinely cared about creating a website that reflected both my practice and my patients' experience. I was so impressed with his work that I continued working with him for ongoing website maintenance and future expansion of the site.

I cannot recommend him highly enough.`,
    name: "Aerial Greene, PMHNP-BC",
    role: "Owner, FHCL Psychiatry",
  },
  {
    quote: `Guy did an outstanding job bringing the vision for WholePath Psychiatry to life. From the very beginning, he was responsive, patient, and incredibly attentive to every detail throughout the entire process. He always took the time to answer questions clearly, explain ideas thoughtfully, and ensure that everything reflected the heart and mission behind our practice.

What stood out most was his professionalism, creativity, and communication. He consistently kept us updated, delivered everything on time, and made what could have been an overwhelming process feel smooth and stress-free. The final result exceeded our expectations and gave us a website and branding presence that truly feels aligned with who we are as a practice.

We are incredibly grateful for his dedication, quality of work, and collaborative spirit, and we would highly recommend him to anyone looking for thoughtful and professional web design services.`,
    name: "Hilda Azefor, DNP, CRNP-PMH",
    role: "Owner, WholePath Psychiatry",
  },
  {
    quote: `From our very first conversation, it was clear that Guy genuinely cared about understanding the heart behind our business rather than simply building another website. He brought an incredible level of creativity, professionalism, and attention to detail to every stage of the project.

The entire experience felt collaborative and thoughtful from start to finish. Communication was consistent, timelines were respected, and every question or request was handled quickly and professionally. What impressed us most was his ability to create a website and brand presence that feels modern, polished, and authentic without losing the warmth and personality that make our practice unique.

We have received countless compliments on the website already, and we look forward to continuing to work with him as our business grows.`,
    name: "Sarah Mitchell, LPC",
    role: "Founder, W.C.C Counseling",
  },
];

const StarRating = () => (
  <div className="flex justify-center gap-1.5 mb-6" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className="h-6 w-6 sm:h-7 sm:w-7"
        viewBox="0 0 24 24"
        fill="url(#testimonial-star-gradient)"
        aria-hidden
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800/80 to-slate-900 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">Client Testimonials</h2>
        <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
          Hear from behavioral health providers who have launched and grown with a site built for their practice.
        </p>

        <div className="relative bg-slate-800/80 border border-slate-700 rounded-2xl p-8 sm:p-10 shadow-xl overflow-hidden">
          <svg width="0" height="0" className="absolute" aria-hidden>
            <defs>
              <linearGradient id="testimonial-star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
            </defs>
          </svg>

          {/* Subtle accent glow */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-teal-500/20 to-orange-400/20 blur-3xl"
            aria-hidden
          />

          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className={`flex flex-col justify-center transition-opacity duration-700 ease-in-out ${
                  index === activeIndex
                    ? "opacity-100 relative z-10"
                    : "opacity-0 absolute inset-0 z-0 pointer-events-none"
                }`}
                aria-hidden={index !== activeIndex}
              >
                <StarRating />
                <blockquote className="text-slate-200 text-base sm:text-lg leading-relaxed whitespace-pre-line text-center">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <footer className="mt-8 text-center">
                  <cite className="not-italic">
                    <p className="font-semibold text-slate-50">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-teal-300/90">{testimonial.role}</p>
                  </cite>
                </footer>
              </article>
            ))}
          </div>

          {/* Slide indicators */}
          <div
            className="relative z-20 flex justify-center gap-2 mt-8"
            role="tablist"
            aria-label="Testimonial slides"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Show testimonial ${index + 1} of ${testimonials.length}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-gradient-to-r from-teal-500 to-orange-400"
                    : "w-2 bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

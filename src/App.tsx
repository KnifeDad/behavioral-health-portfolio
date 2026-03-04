/**
 * App.tsx — Root component for the behavioral health portfolio.
 * Renders the full single-page layout: particles, header, and all sections in order.
 */
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhoServe from "./components/WhoServe";
import FeaturedProject from "./components/FeaturedProject";
import Services from "./components/Services";
import Process from "./components/Process";
import WhyWork from "./components/WhyWork";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 min-h-screen">
      {/* Floating particle layer (sits above sections, below header) */}
      <ParticleBackground />
      <Header />
      <Hero />
      <WhoServe />
      <FeaturedProject />
      <Services />
      <Process />
      <WhyWork />
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;


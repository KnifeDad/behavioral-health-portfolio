/**
 * Bio — Personal story section (id="about"). Nav "About" anchor target.
 */
import React from "react";

const Gradient = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
    {children}
  </span>
);

const Bio = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950 relative z-10"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 leading-tight">
          Somewhere Between <Gradient>Poetry</Gradient> &amp; <Gradient>Pixels</Gradient>
        </h2>

        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
          <p>
            I&apos;m a web designer and developer who focuses exclusively on{" "}
            <Gradient>behavioral health practices</Gradient>, helping{" "}
            <Gradient>independent therapists, PMHNPs</Gradient>, and small mental health
            providers create websites that feel{" "}
            <Gradient>professional, trustworthy, and deeply human</Gradient>.
          </p>

          <p>
            My approach to design is rooted in clarity, warmth, and attention to detail. I
            believe healthcare websites should feel calming and approachable while still
            communicating professionalism and credibility from the very first interaction.
          </p>

          <p>
            Outside of web design, I&apos;m a writer, music enthusiast, lifelong gamer,
            horror fan, and proud father to two incredible children and two very spoiled
            French Bulldogs. Life has shaped me in profound ways over the years, including
            the loss of my wife to stage 4 breast cancer and walking alongside my son
            through multiple open-heart surgeries related to a rare congenital heart
            condition. Those experiences fundamentally changed the way I view people,
            connection, and the importance of <Gradient>compassion</Gradient> in the work we
            do.
          </p>

          <p>
            I care deeply about creating genuine relationships with the people I work
            with. Many of my clients are building practices centered around healing,
            trust, and advocacy, and it means a great deal to me to help bring those
            visions to life online.
          </p>

          <p>
            Whether I&apos;m refining typography at 2 a.m., discussing branding concepts
            over coffee, writing poetry, or listening to jazz and heavy music in the same
            playlist, I try to approach life and work with curiosity, humor, empathy, and
            intention.
          </p>

          <p>
            At the end of the day, my goal is simple: create{" "}
            <Gradient>beautiful, thoughtful websites</Gradient> that help good people grow
            meaningful practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bio;

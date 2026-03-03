/**
 * ParticleBackground — Floating teal/orange/slate dots across the viewport.
 * Rendered above section content (z-20), pointer-events-none so clicks pass through. Animation in index.css.
 */
import React, { useMemo } from "react";

const PARTICLE_COUNT = 48;

const ParticleBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      left: `${(i * 17 + 7) % 100}%`,
      top: `${(i * 23 + 11) % 100}%`,
      size: 4 + (i % 4),
      delay: `${(i * 0.3) % 4}s`,
      duration: 8 + (i % 5),
      hue: i % 3 === 0 ? "teal" : i % 3 === 1 ? "orange" : "slate",
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 z-[20] overflow-hidden pointer-events-none min-h-screen"
      aria-hidden
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: `${p.duration}s`,
            backgroundColor:
              p.hue === "teal"
                ? "rgb(45 212 191)"
                : p.hue === "orange"
                  ? "rgb(251 146 60)"
                  : "rgb(148 163 184)",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;

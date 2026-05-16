"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Daisy SVG that repeats along the road
function Daisy({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      className="walking-daisy"
      style={style}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      {/* petals */}
      {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((deg) => (
        <ellipse
          key={deg}
          cx="9"
          cy="3.5"
          rx="1.6"
          ry="3.2"
          fill="white"
          opacity="0.92"
          transform={`rotate(${deg} 9 9)`}
        />
      ))}
      {/* centre */}
      <circle cx="9" cy="9" r="2.8" fill="#f5c842" />
      <circle cx="9" cy="9" r="1.4" fill="#e8a800" />
    </svg>
  );
}

// Grass blade SVG
function GrassBlade({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      className="walking-grass"
      style={style}
      width="8"
      height="16"
      viewBox="0 0 8 16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 16 Q5 10 7 4 Q5 8 4 6 Q3 8 1 4 Q3 10 4 16Z" fill="#7eb86a" opacity="0.8" />
    </svg>
  );
}

const DAISIES = [
  { left: "4%", size: 14, delay: "0s" },
  { left: "11%", size: 12, delay: "0.4s" },
  { left: "18%", size: 16, delay: "0.8s" },
  { left: "26%", size: 11, delay: "0.2s" },
  { left: "34%", size: 15, delay: "1.1s" },
  { left: "42%", size: 13, delay: "0.6s" },
  { left: "50%", size: 17, delay: "0.3s" },
  { left: "58%", size: 12, delay: "0.9s" },
  { left: "66%", size: 14, delay: "0.5s" },
  { left: "74%", size: 16, delay: "0.1s" },
  { left: "82%", size: 11, delay: "0.7s" },
  { left: "89%", size: 13, delay: "1.2s" },
  { left: "96%", size: 15, delay: "0.4s" },
];

const GRASS = [
  { left: "7%", delay: "0.1s" },
  { left: "15%", delay: "0.5s" },
  { left: "22%", delay: "0.2s" },
  { left: "30%", delay: "0.8s" },
  { left: "38%", delay: "0.3s" },
  { left: "46%", delay: "0.6s" },
  { left: "54%", delay: "0.1s" },
  { left: "62%", delay: "0.9s" },
  { left: "70%", delay: "0.4s" },
  { left: "78%", delay: "0.7s" },
  { left: "86%", delay: "0.2s" },
  { left: "93%", delay: "0.5s" },
];

export function WalkingGirlBanner() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [animData, setAnimData] = useState<any>(null);

  useEffect(() => {
    fetch("/animations/travel-van.json")
      .then((r) => r.json())
      .then(setAnimData)
      .catch(() => null);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const el = outerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const pct = Math.max(0, Math.min(1, scrolled / total));
      setProgress(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // progress=0 → right edge (+120vw), progress=1 → left edge (-40vw)
  const x = 120 - progress * 160;

  return (
    <div ref={outerRef} className="walking-outer" aria-hidden="true">
      <div className="walking-sticky">
        {/* Meadow ground */}
        <div className="walking-meadow">
          {/* Grass blades */}
          {GRASS.map((g, i) => (
            <GrassBlade
              key={i}
              style={{
                position: "absolute",
                left: g.left,
                bottom: "0",
                animationDelay: g.delay,
              }}
            />
          ))}
          {/* Daisies */}
          {DAISIES.map((d, i) => (
            <Daisy
              key={i}
              style={{
                position: "absolute",
                left: d.left,
                bottom: "4px",
                width: d.size,
                height: d.size,
                animationDelay: d.delay,
              }}
            />
          ))}
        </div>

        {/* Path / dirt road below girl */}
        <div className="walking-road">
          <span className="walking-road-dashes" />
        </div>

        {/* Girl */}
        <div
          className="walking-girl-wrap"
          style={{ transform: `translateX(${x}vw) scaleX(-1)` }}
        >
          {animData && (
            <Lottie
              animationData={animData}
              loop
              autoplay
              className="walking-lottie"
            />
          )}
        </div>

        {/* Label that fades in mid-scroll */}
        <div
          className="walking-label"
          style={{ opacity: progress > 0.15 && progress < 0.85 ? 1 : 0 }}
        >
          <span className="eyebrow">BADLEN · Брест</span>
          <p>Каждое платье шьётся индивидуально — от замера до посадки</p>
        </div>
      </div>
    </div>
  );
}

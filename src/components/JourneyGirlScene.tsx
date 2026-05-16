"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const journeySteps = [
  {
    title: "Вдохновение",
    text: "Листаем Pinterest, сохраняем платья — собираем настроение и первый образ мечты.",
  },
  {
    title: "Примерка силуэта",
    text: "Можно примерить готовые в любом салоне города — так проще понять нужный фасон.",
  },
  {
    title: "Консультация в BADLEN",
    text: "Приходите с картинками из Pinterest — обсуждаем модель, ткань, изменения под вас.",
  },
  {
    title: "Пошив и примерки",
    text: "1–2 примерки в ателье — доводим длину, талию и ощущение до идеала.",
  },
] as const;

const journeyPhotos = [
  {
    cls: "jg-photo-one",
    src: "https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    cls: "jg-photo-two",
    src: "https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    cls: "jg-photo-three",
    src: "https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    cls: "jg-photo-four",
    src: "https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
] as const;

function ZagsBuilding({ progress }: { progress: number }) {
  // Appear when van is close to left edge
  const visible = progress > 0.75;
  const opacity = visible ? Math.min(1, (progress - 0.75) / 0.12) : 0;
  return (
    <div
      className="jg-zags-building"
      aria-hidden="true"
      style={{ opacity, transition: "opacity 0.3s" }}
    >
      <svg viewBox="0 0 220 180" width="220" height="180" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main body */}
        <rect x="15" y="60" width="190" height="120" fill="#f5efe4" stroke="#c8b89a" strokeWidth="1.2"/>
        {/* Pediment / roof */}
        <polygon points="5,60 110,14 215,60" fill="#e8d8c0" stroke="#c8b89a" strokeWidth="1.2"/>
        {/* Pediment inner triangle */}
        <polygon points="55,60 110,34 165,60" fill="#f0e4d0"/>
        {/* Star in pediment */}
        <circle cx="110" cy="48" r="5" fill="none" stroke="#b8a07a" strokeWidth="0.8"/>
        <text x="110" y="52" textAnchor="middle" fontSize="7" fill="#b8a07a">✦</text>
        {/* Columns */}
        {[32, 58, 144, 170].map((cx) => (
          <g key={cx}>
            <rect x={cx} y="58" width="11" height="122" rx="1" fill="#eddfc8" stroke="#c8b89a" strokeWidth="0.6"/>
            <ellipse cx={cx + 5.5} cy="58" rx="7" ry="3" fill="#e0ceaf"/>
          </g>
        ))}
        {/* Central arch door — wide enough for van */}
        <rect x="84" y="102" width="52" height="78" fill="#6e8e98"/>
        <path d="M84 102 Q110 78 136 102" fill="#6e8e98"/>
        {/* Door frame */}
        <path d="M84 102 Q110 78 136 102 L136 180 L84 180 Z" fill="none" stroke="#5a7580" strokeWidth="1.5"/>
        {/* Side windows */}
        <rect x="22" y="76" width="26" height="20" rx="2" fill="#a8c4cc" stroke="#8faab2" strokeWidth="0.8"/>
        <rect x="172" y="76" width="26" height="20" rx="2" fill="#a8c4cc" stroke="#8faab2" strokeWidth="0.8"/>
        {/* Upper windows */}
        <rect x="22" y="104" width="26" height="22" rx="2" fill="#a8c4cc" stroke="#8faab2" strokeWidth="0.8"/>
        <rect x="172" y="104" width="26" height="22" rx="2" fill="#a8c4cc" stroke="#8faab2" strokeWidth="0.8"/>
        {/* ЗАГС inscription */}
        <text x="110" y="54" textAnchor="middle" fontSize="11" fontWeight="bold"
          fill="#8a7050" letterSpacing="4" fontFamily="serif">ЗАГС</text>
        {/* Entrance steps */}
        <rect x="68" y="178" width="84" height="3" fill="#d4c0a0"/>
        <rect x="74" y="174" width="72" height="4" fill="#d8c4a8"/>
      </svg>
    </div>
  );
}

function Daisy({ style }: { style?: React.CSSProperties }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={style}>
      {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((deg) => (
        <ellipse key={deg} cx="8" cy="3" rx="1.4" ry="3" fill="white" opacity="0.9"
          transform={`rotate(${deg} 8 8)`} />
      ))}
      <circle cx="8" cy="8" r="2.5" fill="#f5c842" />
      <circle cx="8" cy="8" r="1.2" fill="#e8a800" />
    </svg>
  );
}

export function JourneyGirlScene() {
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
      const total = el.offsetHeight - window.innerHeight;
      const pct = Math.max(0, Math.min(1, -el.getBoundingClientRect().top / total));
      setProgress(pct);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Van drives right→left. Keep it moving the whole time (no pause at edges).
  // At progress=0 starts just off right edge; at progress=1 just exits left edge.
  const x = 105 - progress * 150;
  // Van fades out as it enters the ЗАГС building (progress > 0.9)
  const vanOpacity = progress > 0.9 ? Math.max(0, 1 - (progress - 0.9) / 0.07) : 1;

  return (
    <div ref={outerRef} className="jg-outer">
      <div className="jg-sticky">
        {/* Background photos */}
        <div className="jg-photos" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {journeyPhotos.map((p) => (
            <img key={p.cls} className={p.cls} src={p.src} alt="" loading="lazy" />
          ))}
        </div>

        {/* Step cards */}
        <div className="jg-cards">
          {journeySteps.map((step, i) => (
            <article key={step.title} className={`jg-card jg-card-${i + 1}`}>
              <span className="jg-card-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        {/* Meadow + road */}
        <div className="jg-ground" aria-hidden="true">
          <div className="jg-road">
            <span className="jg-road-dashes" />
          </div>
          <div className="jg-meadow">
            {[4, 12, 20, 28, 36, 44, 52, 60, 68, 76, 84, 92].map((left, i) => (
              <Daisy
                key={i}
                style={{ position: "absolute", left: `${left}%`, bottom: 2, animationDelay: `${(i * 0.3) % 1.5}s` }}
              />
            ))}
          </div>
        </div>

        {/* ЗАГС building — appears at left edge as van approaches */}
        <ZagsBuilding progress={progress} />

        {/* Van — scroll-driven, always moving right→left */}
        <div
          className="jg-girl-wrap"
          aria-hidden="true"
          style={{ transform: `translateX(${x}vw) scaleX(-1)`, opacity: vanOpacity }}
        >
          {animData && (
            <Lottie animationData={animData} loop autoplay className="jg-girl-lottie" />
          )}
        </div>

        {/* Centre label */}
        <div
          className="jg-label"
          style={{ opacity: progress > 0.1 && progress < 0.9 ? 1 : 0 }}
        >
          <p className="eyebrow">BADLEN · Брест</p>
          <p>Каждый образ — индивидуально, с любовью к детали</p>
        </div>
      </div>
    </div>
  );
}

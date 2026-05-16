"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SilhouetteFilter } from "@/components/SilhouetteFilter";
import { EveningDressCalculator } from "@/components/EveningDressCalculator";
import {
  pinterestWeddingDresses,
  pinterestEveningDresses,
  weddingSilhouettes,
} from "@/data/site";

function WeddingIcon() {
  return (
    <svg width="40" height="56" viewBox="0 0 40 56" fill="none" aria-hidden="true">
      {/* Bodice */}
      <path d="M13 5 Q11 2.5 9 2 Q14 0.5 20 0.5 Q26 0.5 31 2 Q29 2.5 27 5 L25 15 Q20 19 15 15 Z"
        stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
      <path d="M15 15 L13 25 Q20 29 27 25 L25 15" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      {/* A-line skirt */}
      <path d="M13 25 L3 55 L37 55 L27 25" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
      {/* Waist seam */}
      <path d="M13 25 Q20 29 27 25" stroke="currentColor" strokeWidth="0.8" opacity="0.5" fill="none"/>
      {/* Veil hint */}
      <path d="M20 0.5 Q29 1.5 35 7 Q37 17 30 21"
        stroke="currentColor" strokeWidth="0.9" strokeDasharray="2.5 2" opacity="0.5" fill="none"/>
    </svg>
  );
}

function EveningIcon() {
  return (
    <svg width="38" height="52" viewBox="0 0 38 52" fill="none" aria-hidden="true">
      {/* Bodice — sleeveless */}
      <path d="M13 5 Q11 2.5 9 2 Q14 0.5 19 0.5 Q24 0.5 29 2 Q27 2.5 25 5 L23 14 Q19 17 15 14 Z"
        stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
      <path d="M15 14 L14 22 Q19 26 24 22 L23 14" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      {/* Fitted body to knee then flare */}
      <path d="M14 22 L12 36 Q10 41 6 51 L32 51 Q28 41 26 36 L24 22"
        stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
      {/* Hip seam */}
      <path d="M12 36 Q19 39 26 36" stroke="currentColor" strokeWidth="0.8" opacity="0.5" fill="none"/>
      {/* Sparkle */}
      <path d="M32 9 L33 6 L34 9 L33 12 Z" fill="currentColor" opacity="0.45"/>
      <path d="M30 8.5 L36 9" stroke="currentColor" strokeWidth="0.6" opacity="0.45"/>
      <path d="M33 6 L33 12" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
    </svg>
  );
}

// Pexels photos specifically suited for evening dresses
const eveningPhotos = [
  "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=960",
  "https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=960",
  "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=960",
  "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=960",
  "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=960",
];

export function DressCategoryTabs() {
  const [cat, setCat] = useState<"wedding" | "evening">("wedding");

  // Merge evening dresses with dedicated evening photos
  const eveningWithPhotos = pinterestEveningDresses.map((dress, i) => ({
    ...dress,
    image: eveningPhotos[i % eveningPhotos.length],
  }));

  return (
    <div>
      {/* Category tabs */}
      <div className="dress-category-tabs">
        <button
          className={`dress-cat-btn${cat === "wedding" ? " active" : ""}`}
          onClick={() => setCat("wedding")}
        >
          <WeddingIcon />
          <span>Свадебные платья</span>
          <small>Примерка · Брест · от 500 BYN</small>
        </button>
        <button
          className={`dress-cat-btn${cat === "evening" ? " active" : ""}`}
          onClick={() => setCat("evening")}
        >
          <EveningIcon />
          <span>Вечерние платья</span>
          <small>Выпускной · роспись · от 250 BYN</small>
        </button>
      </div>

      {/* Wedding: silhouette filter + catalog */}
      {cat === "wedding" && (
        <SilhouetteFilter
          silhouettes={weddingSilhouettes}
          dresses={pinterestWeddingDresses}
        />
      )}

      {/* Evening: photos grid + price calculator */}
      {cat === "evening" && (
        <>
          <section className="section">
            <div className="section-heading">
              <p className="eyebrow">Вечерние</p>
              <h2>Платья для особого вечера</h2>
              <p className="caption">
                Выпускной, роспись, второй образ или корпоратив.
                1–2 примерки в Бресте. Диапазон: 250–850 BYN.
              </p>
            </div>
            <div className="catalog-grid">
              {eveningWithPhotos.map((dress) => (
                <article className="catalog-card" key={dress.id}>
                  <Image
                    src={dress.image}
                    alt={dress.title}
                    width={960}
                    height={1280}
                    sizes="(max-width: 720px) 100vw, (max-width: 1180px) 50vw, 28vw"
                  />
                  <div>
                    <div className="catalog-card-top">
                      <p>{dress.price}</p>
                      <span>{dress.color}</span>
                    </div>
                    <h3>{dress.title}</h3>
                    <p>{dress.description}</p>
                    <dl>
                      <div><dt>Длина</dt><dd>{dress.length}</dd></div>
                      <div><dt>Стиль</dt><dd>{dress.style}</dd></div>
                    </dl>
                    <div className="mini-chip-row">
                      {dress.details.map((d) => (
                        <span key={d}>{d}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="section-cta">
              <Link className="button primary" href="/contacts">
                Заказать пошив
              </Link>
            </div>
          </section>

          {/* Evening price calculator */}
          <section className="section muted">
            <div className="section-heading">
              <p className="eyebrow">Ориентир</p>
              <h2>Цена до консультации</h2>
              <p className="caption">
                Предварительный расчёт — для понимания бюджета.
                Точная сумма фиксируется после примерки.
              </p>
            </div>
            <EveningDressCalculator />
          </section>
        </>
      )}
    </div>
  );
}

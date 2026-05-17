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


export function DressCategoryTabs() {
  const [cat, setCat] = useState<"wedding" | "evening">("wedding");

  return (
    <div>
      {/* Category tabs */}
      <div className="dress-category-tabs">
        <button
          className={`dress-cat-btn${cat === "wedding" ? " active" : ""}`}
          onClick={() => setCat("wedding")}
        >
          <span>Свадебные платья</span>
          <small>Примерка · Брест · от 500 BYN</small>
        </button>
        <button
          className={`dress-cat-btn${cat === "evening" ? " active" : ""}`}
          onClick={() => setCat("evening")}
        >
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
              {pinterestEveningDresses.map((dress) => (
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

"use client";

import Image from "next/image";
import { useState } from "react";

type Silhouette = {
  readonly title: string;
  readonly note: string;
  readonly image: string;
};

type Dress = {
  readonly id: string;
  readonly title: string;
  readonly price: string;
  readonly image: string;
  readonly silhouette: string;
  readonly style: string;
  readonly material: string;
  readonly details: readonly string[];
  readonly availability: string;
  readonly description: string;
};

type Props = {
  silhouettes: readonly Silhouette[];
  dresses: readonly Dress[];
};

export function SilhouetteFilter({ silhouettes, dresses }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const filteredDresses = active
    ? dresses.filter((d) => d.silhouette === active)
    : dresses;

  return (
    <>
      {/* Silhouette grid with clickable filter */}
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Силуэты</p>
          <h2>Первый выбор</h2>
          <p className="caption">Нажмите на силуэт — каталог обновится.</p>
        </div>
        <div className="silhouette-grid">
          {silhouettes.map((item) => (
            <button
              key={item.title}
              className={`silhouette-card silhouette-btn${active === item.title ? " silhouette-active" : ""}`}
              onClick={() => setActive(active === item.title ? null : item.title)}
              aria-pressed={active === item.title}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={900}
                height={1200}
                sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 25vw"
              />
              <div>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </div>
            </button>
          ))}
        </div>
        {active && (
          <div className="section-cta">
            <button
              className="button ghost"
              onClick={() => setActive(null)}
            >
              Сбросить фильтр
            </button>
          </div>
        )}
      </section>

      {/* Catalog filtered */}
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Каталог</p>
          <h2>
            {active ? `Силуэт: ${active}` : "Витрина BADLEN"}
          </h2>
          {active && (
            <p className="caption">
              {filteredDresses.length}{" "}
              {filteredDresses.length === 1 ? "модель" : "модели"} в этом силуэте
            </p>
          )}
        </div>
        <div className="catalog-grid">
          {filteredDresses.map((dress) => (
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
                  <span>{dress.availability}</span>
                </div>
                <h3>{dress.title}</h3>
                <p>{dress.description}</p>
                <dl>
                  <div>
                    <dt>Силуэт</dt>
                    <dd>{dress.silhouette}</dd>
                  </div>
                  <div>
                    <dt>Материал</dt>
                    <dd>{dress.material}</dd>
                  </div>
                  <div>
                    <dt>Стиль</dt>
                    <dd>{dress.style}</dd>
                  </div>
                </dl>
                <div className="mini-chip-row">
                  {dress.details.map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { lookbookPhotos } from "@/data/site";

export const metadata: Metadata = {
  title: "Образы с корсетами — Lookbook BADLEN 2026",
  description:
    "Редакционные образы с корсетами BADLEN: Bridal, City, Romantic, Editorial. Вдохновение для вашего заказа. Пошив по меркам по всей Беларуси.",
  alternates: {
    canonical: "/lookbook",
  },
};

export default function LookbookPage() {
  return (
    <main>
      <section className="page-hero" style={{ minHeight: "60vh" }}>
        <div>
          <p className="eyebrow">Lookbook 2026</p>
          <h1>Образы</h1>
          <p className="page-subtitle">
            16 образов с корсетами BADLEN — для вдохновения и настроения.
          </p>
          <p>
            Bridal, city, romantic и editorial. Каждый корсет шьётся вручную
            по вашим меркам — выберите образ, который близок вам.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/corset-constructor">
              Собрать свой корсет
            </Link>
            <Link className="button ghost" href="/corsets">
              Все корсеты
            </Link>
          </div>
        </div>
        <Image
          src="/corsets/corset-29.jpeg"
          alt="BADLEN Lookbook — образы с корсетами"
          width={1200}
          height={1600}
          sizes="(max-width: 1080px) 100vw, 38vw"
          priority
        />
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Все образы</p>
          <h2>Коллекция образов</h2>
        </div>

        <div className="lookbook-grid">
          {lookbookPhotos.map((photo) => (
            <article key={photo.image} className="lookbook-card">
              <Image
                src={photo.image}
                alt={photo.mood}
                fill
                sizes="(max-width: 720px) 50vw, (max-width: 1080px) 33vw, 25vw"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              <div className="lookbook-card-overlay">
                <p className="lookbook-card-mood">{photo.mood}</p>
                <p className="lookbook-card-meta">{photo.text}</p>
              </div>
              <div className="lookbook-card-tag">{photo.mood}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted">
        <div className="lookbook-cta">
          <p className="eyebrow">Ваш образ</p>
          <h2>Создайте<br /><em>свой корсет</em></h2>
          <p>
            Любой образ из лукбука можно воплотить. Выберите ткань, силуэт
            и застёжку — корсет пошьём по вашим меркам за 7 дней.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/corset-constructor">
              Конфигуратор корсета
            </Link>
            <Link className="button ghost" href="/measurements-guide">
              Гайд по меркам
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

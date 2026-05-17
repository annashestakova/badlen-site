import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { lookbookPhotos } from "@/data/site";

export const metadata: Metadata = {
  title: "Образы с корсетами — Lookbook BADLEN 2026",
  description:
    "Редакционные образы с корсетами BADLEN: Bridal, City, Romantic, Editorial. Вдохновение для вашего заказа. Пошив по меркам по всей Беларуси.",
  alternates: { canonical: "/lookbook" },
};

export default function LookbookPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">BADLEN · 2026</p>
          <h1>Образы</h1>
          <p className="page-subtitle">24 образа с корсетами — для вдохновения</p>
        </div>
      </section>

      <section className="section">
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

      <section className="lb-cta">
        <p className="eyebrow">Ваш образ</p>
        <h2>Создайте свой корсет</h2>
        <div className="button-row">
          <Link className="button primary" href="/corset-constructor">
            Конфигуратор
          </Link>
          <Link className="button ghost" href="/measurements-guide">
            Гайд по меркам
          </Link>
        </div>
      </section>
    </main>
  );
}

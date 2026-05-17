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

const GROUP_COLORS = [
  "#fde8ec", // rose blush
  "#e9f5eb", // soft sage
  "#ede8fd", // lilac
  "#fdf4e3", // warm gold
  "#fde8f5", // pink
  "#e3fdf7", // mint
  "#e3ecfd", // sky blue
  "#fdf0e3", // peach
];

const PATTERNS = ["a", "b", "c"] as const;

export default function LookbookPage() {
  const chunks: (typeof lookbookPhotos[number])[][] = [];
  for (let i = 0; i < lookbookPhotos.length; i += 3) {
    chunks.push([...lookbookPhotos].slice(i, i + 3));
  }

  return (
    <main className="lb-page">
      <header className="lb-header">
        <p className="eyebrow">BADLEN · 2026</p>
        <h1 className="lb-title">Образы</h1>
        <p className="lb-subtitle">24 образа с корсетами — для вдохновения</p>
      </header>

      <div className="lb-groups">
        {chunks.map((group, gi) => (
          <section
            key={gi}
            className={`lb-group lb-pattern-${PATTERNS[gi % 3]}`}
            style={{ backgroundColor: GROUP_COLORS[gi % GROUP_COLORS.length] }}
          >
            {group.map((photo, pi) => (
              <article key={photo.image} className={`lb-photo lb-photo-${pi}`}>
                <Image
                  src={photo.image}
                  alt={photo.mood}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
                <div className="lb-photo-label">
                  <span>{photo.mood}</span>
                </div>
              </article>
            ))}
          </section>
        ))}
      </div>

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

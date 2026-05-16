import type { Metadata } from "next";
import Link from "next/link";
import { StoryScene } from "@/components/StoryScene";

export const metadata: Metadata = {
  title: "История BADLEN — от вдохновения до ЗАГСа",
  description:
    "Как рождается свадебное платье в BADLEN: от Pinterest-мудборда до финальной примерки. Индивидуальный пошив в Бресте.",
  alternates: { canonical: "/story" },
};

export default function StoryPage() {
  return (
    <main>
      {/* Intro before scroll animation */}
      <section className="story-intro">
        <p className="eyebrow">BADLEN · История</p>
        <h1>От вдохновения<br />до ЗАГСа</h1>
        <p className="page-subtitle">
          Как выглядит путь невесты — от первой сохранённой картинки до дня,
          когда платье наконец надевают.
        </p>
        <Link className="button ghost" href="/contacts">
          Начать свой путь
        </Link>
      </section>

      {/* Scroll-driven story animation */}
      <StoryScene />

      {/* Outro after scroll */}
      <section className="section story-outro muted">
        <div className="section-heading">
          <p className="eyebrow">BADLEN · Брест</p>
          <h2>Готовы начать?</h2>
          <p className="caption">
            Запись на консультацию — первый шаг. Приходите с картинками,
            настроением или просто вопросами. Дальше разберёмся вместе.
          </p>
        </div>
        <div className="button-row" style={{ justifyContent: "center" }}>
          <Link className="button primary" href="/contacts">
            Записаться на консультацию
          </Link>
          <Link className="button ghost" href="/wedding-dresses">
            Смотреть платья
          </Link>
        </div>
      </section>
    </main>
  );
}

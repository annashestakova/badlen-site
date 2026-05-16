import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fittingSteps, weddingDetails } from "@/data/site";
import { DressCalculator } from "@/components/DressCalculator";
import { DressCategoryTabs } from "@/components/DressCategoryTabs";
import { BookingWidget } from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "Свадебные и вечерние платья в Бресте — BADLEN",
  description:
    "BADLEN в Бресте: свадебные платья от 500 до 2 000 BYN, вечерние от 250 до 850 BYN. Все силуэты, пошив на заказ, индивидуальный пошив и подгонка в ателье.",
  alternates: {
    canonical: "/wedding-dresses",
  },
};

export default function WeddingDressesPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Платья</p>
          <h1>Свадебные и вечерние</h1>
          <p className="page-subtitle">
            Свадебные и вечерние платья на заказ. Пошив индивидуально,
            подгонка по фигуре в ателье.
          </p>
          <p>
            Свадебное от 500 до 2 000 BYN · вечернее от 250 до 850 BYN · срок пошива 1,5–2
            месяца. Рекомендуем начинать минимум за 2–3 месяца до даты.
          </p>
          <div className="button-row">
            <Link className="button primary" href="#booking">
              Записаться
            </Link>
            <Link className="button ghost" href="/atelier">
              Ателье
            </Link>
          </div>
        </div>
      </section>

      <section className="section compact">
        <div className="detail-chip-row">
          {weddingDetails.map((detail) => (
            <span className="detail-chip" key={detail}>
              {detail}
            </span>
          ))}
        </div>
      </section>

      {/* Category tabs + catalog with silhouette filter */}
      <DressCategoryTabs />

      {/* Real photo from fitting room */}
      <section className="section split">
        <div className="dress-look-photo">
          <Image
            src="/dresses/bride-redhead.png"
            alt="Примерка свадебного платья А-силуэт в BADLEN"
            width={960}
            height={1280}
            sizes="(max-width: 1080px) 100vw, 42vw"
            style={{ objectPosition: "top center" }}
          />
        </div>
        <div>
          <p className="eyebrow">Из ателье</p>
          <h2>А-силуэт · Атлас</h2>
          <p>
            Чистая форма без лишнего декора. Квадратный вырез, широкие бретели,
            мягкая юбка в пол. Один из самых универсальных силуэтов —
            подходит разным типам фигуры.
          </p>
          <p className="caption">Ткань: атлас · Цвет: молочный · Пошив по меркам</p>
          <div className="button-row">
            <Link className="button primary" href="#zapis">Заказать пошив</Link>
            <Link className="button ghost" href="/fabrics">Ткани</Link>
          </div>
        </div>
      </section>

      <section className="section split muted">
        <div>
          <p className="eyebrow">Процесс</p>
          <h2>Следующий шаг</h2>
          <p>
            Платье в BADLEN — это запись, консультация, снятие мерок,
            пошив под фигуру и финальная выдача готового образа.
          </p>
          <Link className="button primary" href="/contacts">
            Записаться
          </Link>
        </div>
        <div className="process-timeline">
          {fittingSteps.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="booking">
        <div className="section-heading">
          <p className="eyebrow">Ориентир</p>
          <h2>Примерная стоимость</h2>
          <p className="caption">
            Калькулятор показывает приблизительный бюджет. Точная цена — после
            консультации и выбора ткани. Сроки уточняем при записи.
          </p>
        </div>
        <DressCalculator />
      </section>

      <section className="section muted" id="zapis">
        <div className="section-heading">
          <p className="eyebrow">Запись</p>
          <h2>Записаться</h2>
          <p className="caption">
            Консультация и пошив — по записи, пн–вс, с 14:30 до 18:00.
            Подтверждение придёт в Telegram.
          </p>
        </div>
        <BookingWidget />
      </section>
    </main>
  );
}

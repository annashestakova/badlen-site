import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  atelierStats,
  faqEntries,
  fittingSteps,
  heroBenefits,
  proofPoints,
  services,
  blogPosts,
} from "@/data/site";
import { QrBlock } from "@/components/QrBlock";
import { JourneyGirlScene } from "@/components/JourneyGirlScene";
import { SilhouetteShowcase } from "@/components/SilhouetteShowcase";
import { FittingAnimation } from "@/components/FittingAnimation";
import { BookingWidget } from "@/components/BookingWidget";
import { ReviewsStrip } from "@/components/ReviewsStrip";

export const metadata: Metadata = {
  title: "Свадебные платья в Бресте — BADLEN",
  description:
    "BADLEN — свадебный салон и ателье в Бресте. Свадебные и вечерние платья, пошив на заказ, корсеты и подгонка по фигуре. Доставка по Беларуси.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Свадебный салон и ателье · Брест</p>
          <h1>BADLEN</h1>
          <p className="page-subtitle">
            Свадебные и вечерние платья, пошив на заказ, ателье и корсеты
            на заказ по Беларуси.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/wedding-dresses">
              Смотреть платья
            </Link>
            <Link className="button ghost" href="/contacts">
              Записаться
            </Link>
          </div>
          <div className="stat-row">
            {atelierStats.map((item) => (
              <div className="stat-chip" key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-showcase">
          <article className="showcase-card showcase-card-fairy">
            <p className="showcase-card-title">Платья</p>
            <p className="showcase-card-text">Силуэт, ткань, корсет и первый образ.</p>
            <Link className="showcase-card-link" href="/wedding-dresses">Каталог</Link>
          </article>

          <article className="showcase-card showcase-card-atelier">
            <p className="showcase-card-title">Ателье</p>
            <p className="showcase-card-text">Посадка, длина, шлейф и доводка.</p>
            <Link className="showcase-card-link" href="/atelier">Услуги</Link>
          </article>

          <div className="hero-media">
            <Image
              src="/dresses/bride-blonde.png"
              alt="Свадебное платье BADLEN — А-силуэт, атлас"
              fill
              priority
              sizes="(max-width: 1080px) 100vw, 42vw"
              style={{ objectPosition: "top center" }}
            />
            <div className="hero-note">
              <strong>Брест · BADLEN</strong>
              <span>Индивидуальный пошив · точная посадка по меркам</span>
            </div>
            {/* Decorative animated silhouette */}
            <div className="hero-silhouette" aria-hidden="true">
              <svg viewBox="0 0 120 280" width="120" height="280" fill="none">
                {/* Head */}
                <ellipse cx="60" cy="28" rx="16" ry="18" fill="white" opacity="0.12" />
                {/* Neck */}
                <rect x="55" y="44" width="10" height="12" rx="4" fill="white" opacity="0.1" />
                {/* Shoulders & torso */}
                <path d="M30 56 Q60 50 90 56 L88 120 Q60 128 32 120 Z" fill="white" opacity="0.1" />
                {/* Corset waist detail */}
                <path d="M36 90 Q60 96 84 90" stroke="white" strokeWidth="1" opacity="0.2" strokeDasharray="4 3" />
                {/* Skirt - A-line */}
                <path d="M32 120 Q10 200 8 275 L112 275 Q110 200 88 120 Q60 128 32 120Z" fill="white" opacity="0.08" />
                {/* Dress details - vertical seam lines */}
                <line x1="60" y1="120" x2="60" y2="270" stroke="white" strokeWidth="0.8" opacity="0.15" />
                <line x1="40" y1="125" x2="25" y2="268" stroke="white" strokeWidth="0.6" opacity="0.1" />
                <line x1="80" y1="125" x2="95" y2="268" stroke="white" strokeWidth="0.6" opacity="0.1" />
                {/* Arms */}
                <path d="M30 58 Q18 90 22 116" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.09" />
                <path d="M90 58 Q102 90 98 116" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.09" />
                {/* Veil hint */}
                <path d="M44 18 Q30 40 20 120 Q40 80 60 70 Q80 80 100 120 Q90 40 76 18" fill="white" opacity="0.05" />
              </svg>
            </div>
          </div>

          <article className="showcase-card showcase-card-about">
            <p className="showcase-card-number">Образ</p>
            <p className="showcase-card-text">Платье, корсет, детали и подготовка к дню.</p>
            <Link className="showcase-card-link" href="/about">О салоне</Link>
          </article>

          <article className="showcase-card showcase-card-corset">
            <p className="showcase-card-title">Корсеты</p>
            <p className="showcase-card-text">Bridal и evening · доставка по РБ.</p>
            <Link className="showcase-card-link" href="/corsets">Заказать</Link>
          </article>
        </div>
      </section>

      {/* ── JOURNEY WITH WALKING GIRL ──────────────────────── */}
      <JourneyGirlScene />

      {/* ── BENEFITS STRIP ─────────────────────────────────── */}
      <section className="section compact">
        <div className="banner-strip">
          {heroBenefits.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      {/* ── PROOF POINTS ───────────────────────────────────── */}
      <section className="section compact">
        <div className="proof-grid">
          {proofPoints.map((item) => (
            <div className="proof-item" key={item.title}>
              <span>{item.value}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────── */}
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Услуги</p>
          <h2>Что мы делаем</h2>
          <p className="caption">Платье, ателье, корсет — каждый путь свой.</p>
        </div>
        <div className="service-cards-row">
          <div className="service-info-card">
            <p className="eyebrow">Свадебные и вечерние платья</p>
            <h3>Пошив от 500 BYN</h3>
            <p>Свадебное — от 500 до 2 000 BYN. Вечернее — от 250 до 850 BYN. 1–2 примерки по ходу пошива в Бресте. Срок пошива 1,5–2 месяца. Лучше начинать за 2–3 месяца до события — это позволяет выбрать ткань, сделать поправки и не торопиться.</p>
            <div className="button-row">
              <Link className="button primary" href="/wedding-dresses">Свадебные</Link>
              <Link className="button ghost" href="/evening-dresses">Вечерние</Link>
            </div>
          </div>
          <div className="service-info-card muted-card">
            <p className="eyebrow">Корсеты на заказ</p>
            <h3>от 199 BYN · онлайн</h3>
            <p>Корсеты шьются по вашим меркам без визита в мастерскую. Срок пошива 7–14 дней. Доставка по всей Беларуси. Мерки снимаете самостоятельно по нашему гайду.</p>
            <div className="button-row">
              <Link className="button primary" href="/corset-constructor">Собрать корсет</Link>
              <Link className="button ghost" href="/measurements-guide">Гайд по меркам</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SILHOUETTES WITH ICONS ─────────────────────────── */}
      <SilhouetteShowcase />

      {/* ── ATELIER ────────────────────────────────────────── */}
      <section className="section split muted">
        <div>
          <p className="eyebrow">Ателье</p>
          <h2>Пошив под вас</h2>
          <p>
            Каждое платье шьётся индивидуально. Минималистичный подход:
            без лишнего декора, с акцентом на крой и посадку. Мы не торопим
            и не держим склад — только работа под вашу фигуру и сценарий дня.
          </p>
          <Link className="button primary" href="/atelier">
            Открыть ателье
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

      {/* ── FITTING ANIMATION ──────────────────────────────── */}
      <section className="section compact fitting-anim-section">
        <div className="fitting-anim-wrap" aria-hidden="true">
          <FittingAnimation />
        </div>
        <div className="fitting-anim-copy">
          <p className="eyebrow">BADLEN · Брест</p>
          <h2>Каждое платье — только для вас</h2>
          <p>
            Мы шьём индивидуально. Примерка, снятие мерок и финальная посадка —
            часть процесса, а не доп. услуга. Никаких шаблонов.
          </p>
          <Link className="button ghost" href="/about">
            О подходе BADLEN
          </Link>
        </div>
      </section>

      {/* ── SERVICES GRID ──────────────────────────────────── */}
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Разделы</p>
          <h2>Куда перейти</h2>
          <p className="caption">Платье, ателье, корсет или запись — страница ведёт дальше.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Link className="service-tile" href={service.href} key={service.title}>
              <Image
                src={service.image}
                alt={service.title}
                width={960}
                height={1200}
                sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 25vw"
              />
              <div>
                <p>{service.kicker}</p>
                <h3>{service.title}</h3>
                <span>{service.text}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── BOOKING ────────────────────────────────────────── */}
      <section className="section muted" id="booking">
        <div className="section-heading">
          <p className="eyebrow">Запись</p>
          <h2>Записаться</h2>
          <p className="caption">
            Консультация, подгонка и пошив — по записи, пн–вс, с 14:30 до 18:00.
            Подтверждение придёт в Telegram.
          </p>
        </div>
        <BookingWidget />
      </section>

      {/* ── REVIEWS ────────────────────────────────────────── */}
      <section className="section reviews-section">
        <div className="section-heading">
          <p className="eyebrow">Отзывы</p>
          <h2>Говорят невесты</h2>
          <p className="caption">Скриншоты реальных переписок и отзывов наших клиенток.</p>
        </div>
        <ReviewsStrip />
      </section>

      {/* ── BLOG PREVIEW ───────────────────────────────────── */}
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Блог</p>
          <h2>Полезные статьи</h2>
          <p className="caption">Отвечаем на вопросы до того, как вы их успели задать.</p>
        </div>
        <div className="blog-grid">
          {blogPosts.slice(0, 3).map((post) => (
            <Link className="blog-card" href={`/blog/${post.slug}`} key={post.slug}>
              <p className="eyebrow">{post.tag}</p>
              <h3>{post.title}</h3>
              <p className="caption">{post.excerpt}</p>
              <span className="blog-card-link">Читать →</span>
            </Link>
          ))}
        </div>
        <div className="section-cta">
          <Link className="button ghost" href="/blog">Все статьи</Link>
        </div>
      </section>

      {/* ── CORSETS ────────────────────────────────────────── */}
      <section className="section split muted">
        <div>
          <p className="eyebrow">Корсеты</p>
          <h2>Онлайн‑заказ</h2>
          <p className="caption">
            Конфигуратор → мерки → пошив → доставка по Беларуси.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/corset-constructor">
              Собрать корсет
            </Link>
            <Link className="button ghost" href="/measurements-guide">
              Мерки
            </Link>
          </div>
        </div>
        <QrBlock />
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Частые вопросы</h2>
        </div>
        <div className="faq-grid">
          {faqEntries.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

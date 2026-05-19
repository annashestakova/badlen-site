import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ткани для свадебных платьев и корсетов — BADLEN Брест",
  description:
    "Ткани BADLEN: атлас, кружево, бархат, жаккард и шифон для свадебных платьев, вечерних образов и корсетов на заказ. Брест, пошив 2026.",
  alternates: { canonical: "/fabrics" },
};

const categories = [
  {
    id: "wedding",
    eyebrow: "Свадебные платья",
    title: "Для невесты",
    subtitle: "Ткани, которые держат форму и создают образ мечты",
    photo: "https://images.pexels.com/photos/3361819/pexels-photo-3361819.jpeg?auto=compress&cs=tinysrgb&w=1800",
    accent: "#c4a882",
    items: [
      { name: "Атлас", note: "Основная ткань", price: "от 35 BYN/м", desc: "Гладкий, тяжёлый, идеальный для колонны и А-силуэта." },
      { name: "Кружево", note: "Декор и верх", price: "от 55 BYN/м", desc: "Французское и итальянское — для бодиса, рукавов и шлейфа." },
      { name: "Жаккард / Парча", note: "Объём и узор", price: "от 62 BYN/м", desc: "Структурный материал для пышных силуэтов и корсетных вставок." },
      { name: "Шифон", note: "Лёгкий слой", price: "от 28 BYN/м", desc: "Воздушный — для накидок, юбок и многослойных образов." },
    ],
    cta: "/wedding-dresses",
    ctaLabel: "Свадебные платья →",
  },
  {
    id: "evening",
    eyebrow: "Вечерние образы",
    title: "Для выхода",
    subtitle: "Ткани с характером — для тех, кого замечают",
    photo: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1800",
    accent: "#8b5a42",
    items: [
      { name: "Бархат", note: "Богатство текстуры", price: "от 48 BYN/м", desc: "Классика вечернего гардероба — deep burgundy, navy, ivory." },
      { name: "Сетка / Тюль", note: "Прозрачный эффект", price: "от 29 BYN/м", desc: "Для пышных юбок, шлейфов и многослойных конструкций." },
      { name: "Пайетки", note: "Блеск и движение", price: "от 75 BYN/м", desc: "Полотно с пайетками — для вечерних платьев под свет." },
      { name: "Атлас", note: "Универсальный", price: "от 35 BYN/м", desc: "В вечернем контексте — скользящий силуэт и чистая линия." },
    ],
    cta: "/evening-dresses",
    ctaLabel: "Вечерние платья →",
  },
  {
    id: "corset",
    eyebrow: "Корсеты на заказ",
    title: "Для корсета",
    subtitle: "Прочные, красивые, работающие на фигуру",
    photo: "https://images.pexels.com/photos/6765601/pexels-photo-6765601.jpeg?auto=compress&cs=tinysrgb&w=1800",
    accent: "#3a2c24",
    items: [
      { name: "Атлас", note: "Внешний слой", price: "от 35 BYN/м", desc: "Гладкий и плотный — классика для свадебного корсета." },
      { name: "Хлопок / Бязь", note: "Основа конструкции", price: "от 22 BYN/м", desc: "Структурный подкладочный слой — держит косточки и форму." },
      { name: "Бархат", note: "Вечерний корсет", price: "от 48 BYN/м", desc: "Роскошная текстура для особых случаев и event-корсетов." },
      { name: "Кружево", note: "Накладной декор", price: "от 55 BYN/м", desc: "Поверх основы — для романтичного и свадебного образа." },
    ],
    cta: "/corsets",
    ctaLabel: "Корсеты →",
  },
];

const allFabrics = [
  { name: "Атлас",       price: "35", use: "Платья · Корсеты" },
  { name: "Кружево",     price: "55", use: "Платья · Корсеты" },
  { name: "Бархат",      price: "48", use: "Вечерние · Корсеты" },
  { name: "Жаккард",     price: "62", use: "Свадебные" },
  { name: "Шифон",       price: "28", use: "Платья · Накидки" },
  { name: "Сетка",       price: "29", use: "Юбки · Вечерние" },
  { name: "Хлопок",      price: "22", use: "Подкладка · Корсеты" },
  { name: "Пайетки",     price: "75", use: "Вечерние" },
];

export default function FabricsPage() {
  return (
    <main className="fabrics-page">

      {/* ── Hero ── */}
      <section className="fabrics-hero">
        <div className="fabrics-hero-bg" aria-hidden="true" />
        <div className="fabrics-hero-content">
          <p className="eyebrow" style={{ color: "#c4a882", letterSpacing: "0.2em" }}>Ткани · BADLEN</p>
          <h1 className="fabrics-hero-title">Ткань выбирают<br />под задачу</h1>
          <p className="fabrics-hero-sub">
            Не отдельно — а под силуэт, сезон и нужную посадку.
            Атлас, кружево, бархат, жаккард и шифон в работе с 2018 года.
          </p>
        </div>
        {/* Scrolling fabric ticker */}
        <div className="fabrics-ticker" aria-hidden="true">
          <div className="fabrics-ticker-track">
            {["Атлас", "·", "Кружево", "·", "Бархат", "·", "Жаккард", "·", "Шифон", "·", "Сетка", "·", "Хлопок", "·", "Пайетки",
              "·", "Атлас", "·", "Кружево", "·", "Бархат", "·", "Жаккард", "·", "Шифон", "·", "Сетка"].map((f, i) => (
              <span key={i}>{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category banners ── */}
      {categories.map((cat, ci) => (
        <section
          key={cat.id}
          className={`fabric-banner ${ci % 2 === 0 ? "fabric-banner-left" : "fabric-banner-right"}`}
        >
          {/* Photo */}
          <div
            className="fabric-banner-photo"
            style={{ backgroundImage: `url(${cat.photo})` }}
          >
            <div
              className="fabric-banner-overlay"
              style={{
                background: ci % 2 === 0
                  ? "linear-gradient(to right, rgba(20,14,10,0.50) 0%, transparent 60%)"
                  : "linear-gradient(to left, rgba(20,14,10,0.50) 0%, transparent 60%)",
              }}
            />
            <span className="fabric-banner-num" aria-hidden="true">0{ci + 1}</span>
          </div>

          {/* Content */}
          <div className="fabric-banner-content">
            <p className="eyebrow" style={{ color: cat.accent }}>{cat.eyebrow}</p>
            <h2 className="fabric-banner-title">{cat.title}</h2>
            <p className="fabric-banner-sub">{cat.subtitle}</p>

            <div className="fabric-items">
              {cat.items.map((item) => (
                <div key={item.name} className="fabric-item">
                  <div className="fabric-item-head">
                    <strong className="fabric-item-name">{item.name}</strong>
                    <span className="fabric-item-note">{item.note}</span>
                    <span className="fabric-item-price" style={{ color: cat.accent }}>{item.price}</span>
                  </div>
                  <p className="fabric-item-desc">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href={cat.cta}
              className="fabric-cta-link"
              style={{ borderColor: cat.accent, color: cat.accent }}
            >
              {cat.ctaLabel}
            </Link>
          </div>
        </section>
      ))}

      {/* ── Price reference ── */}
      <section className="section muted">
        <div className="section-heading">
          <p className="eyebrow">Ориентир по цене</p>
          <h2>Все ткани</h2>
          <p>Цена за метр — ориентировочная. Расход зависит от модели, размера и декора.</p>
        </div>
        <div className="fabrics-table">
          {allFabrics.map((f) => (
            <div key={f.name} className="fabrics-table-row">
              <span className="fabrics-table-name">{f.name}</span>
              <span className="fabrics-table-use">{f.use}</span>
              <span className="fabrics-table-price">от {f.price} BYN/м</span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link href="/contacts" className="button primary">Записаться на консультацию</Link>
        </div>
      </section>

    </main>
  );
}

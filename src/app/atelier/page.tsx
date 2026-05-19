import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fittingSteps, salonHighlights } from "@/data/site";

const atelierServices = [
  "Подгонка свадебного платья по фигуре",
  "Коррекция корсета, спины и линии талии",
  "Подшив длины и работа со шлейфом",
  "Доработка рукавов, бретелей и декора",
  "Отпаривание и подготовка образа к выдаче",
  "Консультация по ткани, посадке и второму образу",
] as const;

export const metadata: Metadata = {
  title: "Ателье в Бресте — подгонка и пошив платьев на заказ | BADLEN",
  description:
    "Ателье BADLEN в Бресте 2026: подгонка свадебных и вечерних платьев, пошив на заказ, работа с корсетом, длиной и шлейфом. Индивидуальный подход, пошив на заказ.",
  alternates: {
    canonical: "/atelier",
  },
};

export default function AtelierPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Ателье</p>
          <h1>Посадка</h1>
          <p className="page-subtitle">
            Подгонка свадебных и вечерних образов по фигуре, длине и сценарию дня.
          </p>
          <p>
            В BADLEN ателье не вторично. Именно оно превращает красивую картинку
            в платье, которое работает на вас: держит лиф, собирает талию,
            правильно ложится по длине и хорошо смотрится в движении.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/contacts">
              Записаться
            </Link>
            <Link className="button ghost" href="/prices">
              Посмотреть цены
            </Link>
          </div>
        </div>
        <Image
          src="/corsets/corset-24.jpeg"
          alt="Ателье BADLEN"
          width={1200}
          height={1600}
          sizes="(max-width: 1080px) 100vw, 38vw"
        />
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Что делаем</p>
          <h2>Услуги ателье</h2>
        </div>
        <div className="cms-grid">
          {atelierServices.map((service) => (
            <article className="content-panel" key={service}>
              <span className="cms-dot" />
              <p>{service}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split muted">
        <div>
          <p className="eyebrow">Как это идет</p>
          <h2>От записи до выдачи</h2>
          <p>
            Если платье выбрано, дальше идет понятная последовательность:
            запись, подбор, мерки, примерка по ходу работы и финальная выдача готового образа.
          </p>
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

      {/* ── Fabric banners ── */}
      <section className="atelier-fabrics">
        <div className="section-heading" style={{ paddingBottom: "2rem" }}>
          <p className="eyebrow">Материалы</p>
          <h2>Ткани в работе</h2>
          <p>Под каждое изделие подбирается ткань, которая держит форму и работает на фигуру.</p>
        </div>

        <div className="atelier-fabric-banners">
          {[
            {
              label: "Свадебные платья",
              fabrics: "Атлас · Кружево · Жаккард · Шифон",
              photo: "https://images.pexels.com/photos/3361819/pexels-photo-3361819.jpeg?auto=compress&cs=tinysrgb&w=1200",
              accent: "#c4a882",
              href: "/wedding-dresses",
            },
            {
              label: "Вечерние образы",
              fabrics: "Бархат · Сетка · Пайетки · Атлас",
              photo: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1200",
              accent: "#8b5a42",
              href: "/evening-dresses",
            },
            {
              label: "Корсеты",
              fabrics: "Атлас · Хлопок · Бархат · Кружево",
              photo: "https://images.pexels.com/photos/6765601/pexels-photo-6765601.jpeg?auto=compress&cs=tinysrgb&w=1200",
              accent: "#3a2c24",
              href: "/corsets",
            },
          ].map((b) => (
            <Link key={b.label} href={b.href} className="atelier-fabric-card">
              <div
                className="atelier-fabric-card-bg"
                style={{ backgroundImage: `url(${b.photo})` }}
              />
              <div className="atelier-fabric-card-overlay" />
              <div className="atelier-fabric-card-body">
                <p className="eyebrow" style={{ color: b.accent }}>{b.label}</p>
                <p className="atelier-fabric-card-list">{b.fabrics}</p>
                <span className="atelier-fabric-card-cta" style={{ color: b.accent }}>
                  Смотреть →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/fabrics" className="button ghost">Все ткани и цены</Link>
        </div>
      </section>

      <section className="section">
        <div className="price-grid">
          {salonHighlights.map((item) => (
            <article className="content-panel" key={item.title}>
              <p className="eyebrow">BADLEN</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

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

      {/* ── Fabric timeline ── */}
      <section className="atelier-fabrics">
        <div className="section-heading" style={{ paddingBottom: "2rem" }}>
          <p className="eyebrow">Материалы</p>
          <h2>Ткани в работе</h2>
          <p>Как мы работаем с тканью — от выбора до готового изделия.</p>
        </div>

        <div className="fabric-timeline">
          {[
            {
              num: "01",
              title: "Выбор ткани",
              desc: "Подбираем материал под задачу: структуру, вес, цвет и поведение на фигуре.",
              list: "Атлас · Кружево · Бархат · Жаккард · Хлопок · Шифон",
            },
            {
              num: "02",
              title: "Примерка образца",
              desc: "Проверяем драпировку и посадку на фигуре до кроя — чтобы ткань работала именно так, как задумано.",
            },
            {
              num: "03",
              title: "Раскрой по меркам",
              desc: "Ткань кроится под ваши индивидуальные параметры. Никакой стандартной сетки размеров.",
            },
            {
              num: "04",
              title: "Пошив и отделка",
              desc: "Финальная сборка, укладка косточек, застёжка, ручная обработка краёв и контроль посадки.",
            },
          ].map((step) => (
            <div key={step.num} className="fabric-step">
              <div className="fabric-step-num">{step.num}</div>
              <div className="fabric-step-body">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {step.list && <p className="fabric-step-list">{step.list}</p>}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
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

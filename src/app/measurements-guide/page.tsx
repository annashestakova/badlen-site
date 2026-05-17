import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MeasurementsOrderForm } from "@/components/MeasurementsOrderForm";
import { measurementPrep } from "@/data/site";

export const metadata: Metadata = {
  title: "Гайд по меркам для корсета — BADLEN",
  description:
    "Пошаговый гайд BADLEN по снятию мерок для онлайн-заказа корсета: подготовка, 6 измерений с фото, форма заказа с доставкой по Беларуси.",
  alternates: {
    canonical: "/measurements-guide",
  },
};

const measurementSteps = [
  {
    id: "bust",
    label: "Обхват груди",
    desc: "Лента проходит по самым выступающим точкам груди, параллельно полу. Не затягивайте, держите ровно.",
    image: "/measurements/1.png",
    note: "Снимайте в лёгком белье, не в корсете.",
  },
  {
    id: "underbust",
    label: "Под грудью",
    desc: "Лента проходит точно под нижней линией груди — это корсетная линия. Выдохните и слегка втяните живот.",
    image: "/measurements/2.png",
    note: "Именно эта мерка определяет посадку корсета.",
  },
  {
    id: "waist",
    label: "Обхват талии",
    desc: "Лента в самом узком месте торса — примерно на 2–3 пальца выше пупка. Не затягивайте и не выпячивайте.",
    image: "/measurements/3.png",
    note: "Стойте прямо, естественно.",
  },
  {
    id: "hips",
    label: "Обхват бёдер",
    desc: "Лента по наиболее широкой части бёдер, включая ягодицы. Стопы вместе.",
    image: "/measurements/4.png",
    note: "Обычно на 18–22 см ниже талии.",
  },
  {
    id: "back",
    label: "Длина по спине",
    desc: "От седьмого шейного позвонка (косточка на шее, которая выступает при наклоне головы) до талии.",
    image: "/measurements/5.png",
    note: "Попросите помощника, снять самому неудобно.",
  },
  {
    id: "shoulder-to-waist",
    label: "Плечо–талия",
    desc: "От точки плечевого шва (там, где обычно заканчивается ремень на плече) вертикально вниз до линии талии.",
    image: "/measurements/6.png",
    note: "Важна для построения корсетной чашки.",
  },
] as const;

export default function MeasurementsGuidePage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Мерки</p>
          <h1>Как снять мерки</h1>
          <p className="page-subtitle">
            Для онлайн-заказа корсета точность мерок критична — именно по ним
            строится лекало и раскраивается ткань.
          </p>
          <p>
            Подготовьтесь заранее: лёгкое бельё, сантиметровая лента,
            помощник. Шесть измерений — и корсет будет идеально на вас.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/corset-constructor">
              Перейти к конструктору
            </Link>
          </div>
        </div>
        <Image
          src="https://assets.marytrufel.ru/assets/web2/atelier/1-7b075e9b14b85c374e3a03bb2cce8027.jpg"
          alt="Снятие мерок для корсета BADLEN"
          width={1200}
          height={1600}
          sizes="(max-width: 1080px) 100vw, 38vw"
          priority
        />
      </section>

      <section className="section compact">
        <div className="measurement-prep-grid">
          {measurementPrep.map((item, index) => (
            <article className="content-panel prep-card" key={item}>
              <p className="eyebrow">
                Подготовка {String(index + 1).padStart(2, "0")}
              </p>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Step-by-step measurement photos */}
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">6 измерений</p>
          <h2>Пошагово</h2>
          <p className="caption">
            Каждое измерение — фото, описание и важная подсказка.
          </p>
        </div>
        <div className="measurement-steps-grid">
          {measurementSteps.map((step, i) => (
            <article key={step.id} className="measurement-step-card">
              <div className="measurement-step-img">
                <Image
                  src={step.image}
                  alt={step.label}
                  width={640}
                  height={960}
                  sizes="(max-width: 720px) 100vw, 33vw"
                />
                <span className="measurement-step-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="measurement-step-body">
                <h3>{step.label}</h3>
                <p>{step.desc}</p>
                <p className="measurement-step-note">
                  <strong>Важно:</strong> {step.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted">
        <div className="section-heading">
          <p className="eyebrow">Заказ</p>
          <h2>Отправить мерки</h2>
          <p className="caption">
            Заполните форму — данные придут нам сразу. Мы подтвердим в
            течение нескольких часов.
          </p>
        </div>
        <MeasurementsOrderForm />
      </section>
    </main>
  );
}

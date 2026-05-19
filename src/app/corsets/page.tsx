import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { corsetLooks } from "@/data/site";
import { PhotoCard } from "@/components/PhotoCard";

export const metadata: Metadata = {
  title: "Корсеты на заказ в Бресте и по Беларуси — BADLEN",
  description:
    "Корсеты BADLEN: bridal, evening и city модели от 199 BYN. Онлайн-заказ с доставкой по Беларуси, конструктор и гайд по меркам.",
  alternates: {
    canonical: "/corsets",
  },
};

export default function CorsetsPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Корсеты</p>
          <h1>Корсеты</h1>
          <p className="page-subtitle">
            Bridal, evening и city-корсеты на заказ с доставкой по Беларуси.
          </p>
          <p>
            Для корсетов у BADLEN отдельный путь: конфигуратор, гайд по меркам,
            предоплата, согласование деталей и отправка готового изделия.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/corset-constructor">
              Собрать корсет
            </Link>
            <Link className="button ghost" href="/measurements-guide">
              Гайд по меркам
            </Link>
          </div>
        </div>
        <Image
          src="/corsets/corset-25.jpeg"
          alt="Корсет BADLEN — атласный с бантами"
          width={1200}
          height={1600}
          sizes="(max-width: 1080px) 100vw, 38vw"
          priority
        />
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Подборки</p>
          <h2>Корсеты по настроению</h2>
          <p className="caption">
            <Link href="/lookbook" style={{ textDecoration: "underline", opacity: 0.6 }}>
              Смотреть все образы →
            </Link>
          </p>
        </div>
        <div className="look-grid">
          {corsetLooks.map((look) => (
            <PhotoCard
              image={look.image}
              key={look.title}
              text={look.text}
              title={look.title}
            />
          ))}
        </div>
      </section>

      {/* ── Product shots ── */}
      <section className="section corset-shoot">
        <div className="section-heading">
          <p className="eyebrow">Предметная съёмка</p>
          <h2>Новые модели</h2>
          <p>Детали, ткань, конструкция — вблизи.</p>
        </div>
        <div className="corset-shoot-grid">
          {[129, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143].map((n, i) => (
            <div
              key={n}
              className={`corset-shoot-item${i === 0 ? " wide" : i === 3 ? " tall" : i === 7 ? " wide" : ""}`}
            >
              <Image
                src={`/corsets/corset-${n}.jpeg`}
                alt={`Корсет BADLEN — модель ${n}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section muted">
        <div className="section-heading">
          <p className="eyebrow">Как это работает</p>
          <h2>Этапы заказа корсета</h2>
        </div>
        <div className="process-list">
          {[
            {
              title: "Конфигуратор",
              desc: "Открываете конструктор на сайте: выбираете тип корсета, ткань, застёжку и дополнительные опции. Сразу видите ориентир стоимости.",
            },
            {
              title: "Снятие мерок",
              desc: "Открываете гайд по меркам на сайте — там подробные фото и инструкция. Снимаете 6 основных мерок самостоятельно и отправляете нам.",
            },
            {
              title: "Согласование",
              desc: "Мы уточняем детали заказа: посадку, длину, особенности фигуры. Фиксируем финальную стоимость и сроки — всё письменно.",
            },
            {
              title: "Предоплата",
              desc: "Вносите 100% предоплату для запуска заказа.",
            },
            {
              title: "Пошив",
              desc: "Шьём корсет по вашим меркам. Срок — до 7 дней. Держим в курсе по ходу работы.",
            },
            {
              title: "Доставка",
              desc: "Отправляем по Беларуси Белпочтой или СДЭК. Брест — возможен самовывоз. Корсет упакован в подарочную коробку.",
            },
          ].map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

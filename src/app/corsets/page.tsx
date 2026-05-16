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
          src="/corsets/corset-22.jpeg"
          alt="Корсет BADLEN"
          width={1200}
          height={1600}
          sizes="(max-width: 1080px) 100vw, 38vw"
        />
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Подборки</p>
          <h2>Корсеты по настроению</h2>
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
              desc: "Скачиваете гайд по меркам — там подробные фото и инструкция. Снимаете 6 основных мерок самостоятельно и отправляете нам.",
            },
            {
              title: "Согласование",
              desc: "Мы уточняем детали заказа: посадку, длину, особенности фигуры. Фиксируем финальную стоимость и сроки — всё письменно.",
            },
            {
              title: "Предоплата",
              desc: "Вносите предоплату 50% для запуска заказа. Остаток — при получении изделия.",
            },
            {
              title: "Пошив",
              desc: "Шьём корсет по вашим меркам. Срок — от 2 до 4 недель в зависимости от сложности и загрузки. Держим в курсе по ходу работы.",
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

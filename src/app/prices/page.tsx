import type { Metadata } from "next";
import Image from "next/image";
import { closures, corsetOptions, corsetTypes, dressBase, dressOptions } from "@/data/site";

export const metadata: Metadata = {
  title: "Цены на свадебные и вечерние платья в Бресте — BADLEN",
  description:
    "Цены BADLEN 2026: свадебные платья от 500 BYN, вечерние от 250 BYN, корсеты на заказ от 199 BYN. Ориентир по тканям и усложняющим опциям. Брест и доставка по Беларуси.",
  alternates: {
    canonical: "/prices",
  },
};

export default function PricesPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Цены</p>
          <h1>Цены</h1>
          <p className="page-subtitle">
            Итоговая сумма зависит от посадки, ткани, длины, декора и сложности.
          </p>
        </div>
        <Image
          src="https://images.pexels.com/photos/4622419/pexels-photo-4622419.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Ткани и мерки"
          width={1200}
          height={1600}
          sizes="(max-width: 1080px) 100vw, 38vw"
        />
      </section>

      <section className="section">
        <div className="price-grid">
          <article className="content-panel">
            <p className="eyebrow">Платья</p>
            <h3>От 500 BYN</h3>
            {dressBase.map((item) => (
              <p key={item.key}>
                {item.label}: от {item.price} BYN
              </p>
            ))}
          </article>
          <article className="content-panel">
            <p className="eyebrow">Корсеты</p>
            <h3>От 199 BYN</h3>
            {corsetTypes.map((item) => (
              <p key={item.key}>
                {item.label}: от {item.price} BYN
              </p>
            ))}
          </article>
          <article className="content-panel">
            <p className="eyebrow">Опции</p>
            <h3>Усложнение</h3>
            {[...dressOptions.slice(0, 4), ...closures.slice(0, 2), ...corsetOptions.slice(0, 3)].map((item) => (
              <p key={item.key}>
                {item.label}: +{item.price} BYN
              </p>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}

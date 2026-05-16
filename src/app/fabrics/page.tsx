import type { Metadata } from "next";
import Image from "next/image";
import { fabrics } from "@/data/site";

export const metadata: Metadata = {
  title: "Ткани для свадебных платьев и корсетов — BADLEN Брест",
  description:
    "Ткани BADLEN: атлас, микадо, кружево, бархат, сетка и жаккард для свадебных платьев, вечерних образов и корсетов на заказ. Брест, пошив 2026.",
  alternates: {
    canonical: "/fabrics",
  },
};

export default function FabricsPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Ткани</p>
          <h1>Ткани</h1>
          <p className="page-subtitle">
            Материал выбирается не отдельно, а под задачу, сезон и нужную посадку.
          </p>
        </div>
        <Image
          src="https://images.pexels.com/photos/6765601/pexels-photo-6765601.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Каталог тканей BADLEN"
          width={1200}
          height={1600}
          sizes="(max-width: 1080px) 100vw, 38vw"
        />
      </section>

      <section className="section">
        <div className="price-grid">
          {fabrics.map((fabric) => (
            <article className="content-panel" key={fabric.key}>
              <p className="eyebrow">Ткань</p>
              <h3>{fabric.label}</h3>
              <p>Ориентир: {fabric.price} BYN/м. Финальный расход зависит от модели и декора.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cmsReadyEntities, salonHighlights } from "@/data/site";

export const metadata: Metadata = {
  title: "О салоне BADLEN — свадебный салон и ателье в Бресте",
  description:
    "BADLEN — свадебный салон и ателье в Бресте. Индивидуальный пошив свадебных и вечерних платьев, корсеты на заказ. Индивидуальный пошив, посадка по фигуре, образ под ваш день.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">О салоне</p>
          <h1>BADLEN</h1>
          <p className="page-subtitle">
            Салон и ателье в Бресте, где образ собирается вокруг посадки,
            ткани и ощущения невесты.
          </p>
          <p>
            Свадебное платье выбирают не только глазами. Его нужно рассмотреть,
            примерить, почувствовать в движении и понять, как оно работает на
            вашей фигуре, в вашем темпе и в вашем сценарии дня.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/contacts">
              Записаться
            </Link>
            <Link className="button ghost" href="/wedding-dresses">
              Смотреть платья
            </Link>
          </div>
        </div>
        <Image
          src="https://images.pexels.com/photos/1759823/pexels-photo-1759823.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Платье BADLEN"
          width={1200}
          height={1600}
          sizes="(max-width: 1080px) 100vw, 38vw"
        />
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Подход</p>
          <h2>От вдохновения к образу</h2>
        </div>
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

      <section className="section split muted">
        <div>
          <p className="eyebrow">Философия</p>
          <h2>Спокойная свадьба</h2>
          <p>
            Нам ближе чистая подача, хороший крой, честная примерка и вещи,
            которые работают на человека, а не перекрикивают его. Поэтому
            BADLEN выглядит как спокойная витрина, а не как случайный каталог.
          </p>
          <p>
            Здесь важны спокойная примерка, короткие ответы, честный ориентир
            по цене и понятный переход к записи.
          </p>
        </div>
        <div className="content-panel prose-panel">
          <p className="eyebrow">Что важно</p>
          <h3>Что помогает выбрать</h3>
          <ul className="simple-list">
            {cmsReadyEntities.map((entity) => (
              <li key={entity}>{entity}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

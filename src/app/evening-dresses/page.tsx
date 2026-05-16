import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DressCalculator } from "@/components/DressCalculator";
import { catalogFilterGroups, pinterestEveningDresses } from "@/data/site";

export const metadata: Metadata = {
  title: "Вечерние платья в Бресте — пошив и подбор образа",
  description:
    "Вечерние платья BADLEN в Бресте: индивидуальный пошив для выпускного, ужина, росписи и второго образа. Запись на консультацию.",
  alternates: {
    canonical: "/evening-dresses",
  },
};

export default function EveningDressesPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Вечерние</p>
          <h1>Вечерние</h1>
          <p className="page-subtitle">
            Вечерние платья в Бресте для выпускного, ужина, фотосессии,
            росписи и второго выхода.
          </p>
          <p>
            Здесь важны длина, цвет, ткань, степень открытости и повод. Поэтому
            вечерние образы живут отдельно от свадебного каталога.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/contacts">
              Заказать пошив
            </Link>
            <Link className="button ghost" href="/prices">
              Посмотреть цены
            </Link>
          </div>
        </div>
        <Image
          src={pinterestEveningDresses[0].image}
          alt="Вечернее платье BADLEN"
          width={1200}
          height={1600}
          sizes="(max-width: 1080px) 100vw, 38vw"
          priority
        />
      </section>

      <section className="section compact">
        <div className="banner-strip">
          <span>Платья от 250 BYN</span>
          <span>Пошив на заказ в Бресте</span>
          <span>Роспись, выпускной, ужин, фотосессия</span>
          <span>Короткие карточки и единый размер фото</span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Каталог</p>
          <h2>Вечерняя витрина</h2>
        </div>
        <div className="catalog-shell">
          <aside className="filter-panel" aria-label="Фильтры вечернего каталога">
            <div>
              <p className="eyebrow">Фильтры</p>
              <h3>Под событие</h3>
            </div>
            {catalogFilterGroups.slice(1).map((group) => (
              <div className="filter-group" key={group.title}>
                <strong>{group.title}</strong>
                <div>
                  {group.values.map((value) => (
                    <span key={value}>{value}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className="filter-group">
              <strong>Цвет</strong>
              <div>
                {["Пудровый", "Молочный", "Красный", "Шампань", "Графит"].map((value) => (
                  <span key={value}>{value}</span>
                ))}
              </div>
            </div>
          </aside>

          <div className="catalog-grid">
            {pinterestEveningDresses.map((dress) => (
              <article className="catalog-card" key={dress.id}>
                <Image
                  src={dress.image}
                  alt={dress.title}
                  width={960}
                  height={1280}
                  sizes="(max-width: 720px) 100vw, (max-width: 1180px) 50vw, 28vw"
                />
                <div>
                  <div className="catalog-card-top">
                    <p>{dress.price}</p>
                    <span>{dress.color}</span>
                  </div>
                  <h3>{dress.title}</h3>
                  <p>{dress.description}</p>
                  <dl>
                    <div>
                      <dt>Длина</dt>
                      <dd>{dress.length}</dd>
                    </div>
                    <div>
                      <dt>Материал</dt>
                      <dd>{dress.material}</dd>
                    </div>
                    <div>
                      <dt>Стиль</dt>
                      <dd>{dress.style}</dd>
                    </div>
                  </dl>
                  <div className="mini-chip-row">
                    {dress.details.map((detail) => (
                      <span key={detail}>{detail}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="section-heading">
          <p className="eyebrow">Ориентир</p>
          <h2>Цена до консультации</h2>
          <p>
            Предварительный диапазон помогает отсеять лишние вопросы еще до
            записи и быстрее собрать нужный образ.
          </p>
        </div>
        <DressCalculator />
      </section>
    </main>
  );
}

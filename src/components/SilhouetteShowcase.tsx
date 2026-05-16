import Link from "next/link";

type SilhouetteItem = {
  id: string;
  title: string;
  desc: string;
  tip: string;
  img: string;
};

const silhouettes: SilhouetteItem[] = [
  {
    id: "a-line",
    title: "А-силуэт",
    desc: "Плавно расширяется от талии — подходит почти всем формам фигуры.",
    tip: "Ariana, Selene",
    img: "/dresses/silhouettes/sketch-aline.jpg",
  },
  {
    id: "ball-gown",
    title: "Пышное",
    desc: "Полная юбка от талии — торжественный образ для банкета.",
    tip: "Carrie",
    img: "/dresses/silhouettes/sketch-ballgown.jpg",
  },
  {
    id: "mermaid",
    title: "Русалка",
    desc: "Облегает тело до колена, затем расклёш — акцент на рельефе.",
    tip: "Vela",
    img: "/dresses/silhouettes/sketch-mermaid.jpg",
  },
  {
    id: "sheath",
    title: "Прямое",
    desc: "Лаконичная колонна — для камерной церемонии и современного образа.",
    tip: "Selene, Iman",
    img: "/dresses/silhouettes/sketch-straight.jpg",
  },
  {
    id: "empire",
    title: "Ампир",
    desc: "Завышенная талия под грудью, свободная юбка — воздушно и нежно.",
    tip: "Под заказ",
    img: "/dresses/silhouettes/sketch-empire.jpg",
  },
  {
    id: "mini",
    title: "Короткое",
    desc: "Мини или миди для росписи, выпускного или второго образа.",
    tip: "Noelle",
    img: "/dresses/silhouettes/sketch-short.jpg",
  },
];

export function SilhouetteShowcase() {
  return (
    <section className="section muted silhouette-showcase">
      <div className="section-heading">
        <p className="eyebrow">Силуэты</p>
        <h2>Начните с формы</h2>
        <p className="caption">
          Выберите силуэт — и мы пошьём платье этого кроя под вас.
        </p>
      </div>
      <div className="showcase-silhouette-grid">
        {silhouettes.map((item) => (
          <Link
            key={item.id}
            href="/wedding-dresses"
            className="showcase-sil-card"
          >
            <div className="showcase-sil-icon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.img}
                alt={item.title}
                draggable={false}
              />
            </div>
            <h3 className="showcase-sil-title">{item.title}</h3>
            <p className="showcase-sil-desc">{item.desc}</p>
            <span className="showcase-sil-tip">Например: {item.tip}</span>
          </Link>
        ))}
      </div>
      <div className="section-cta">
        <Link className="button primary" href="/wedding-dresses">
          Весь каталог платьев
        </Link>
        <Link className="button ghost" href="/contacts">
          Заказать пошив
        </Link>
      </div>
    </section>
  );
}

/* eslint-disable @next/next/no-img-element */

const journeySteps = [
  {
    title: "Вдохновение",
    text: "Сначала собираем настроение: что нравится, где свадьба и каким должен быть образ.",
  },
  {
    title: "Силуэт",
    text: "Показываем разные формы: А-силуэт, прямое, пышное, русалка, мини или миди.",
  },
  {
    title: "Примерка",
    text: "Проверяем ткань, талию, лиф, спину, длину и то, как платье ведет себя в движении.",
  },
  {
    title: "Ателье",
    text: "Доводим посадку, шлейф, рукава и детали, чтобы образ был готов к вашему дню.",
  },
] as const;

const journeyAssets = [
  {
    className: "journey-photo-one",
    src: "https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    className: "journey-photo-two",
    src: "https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    className: "journey-photo-three",
    src: "https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    className: "journey-photo-four",
    src: "https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
] as const;

export function BadlenJourney() {
  return (
    <section className="journey-section" aria-label="История BADLEN">
      <div className="journey-intro">
        <p className="eyebrow">История</p>
        <h2>О салоне и выборе платья</h2>
        <p>
          Небольшая интерактивная сцена: путь от первого вдохновения до готового
          образа в BADLEN.
        </p>
      </div>

      <div className="journey-stage">
        <div className="journey-backdrop" aria-hidden="true">
          <span className="journey-arch journey-arch-left" />
          <span className="journey-arch journey-arch-right" />
          <span className="journey-star journey-star-one" />
          <span className="journey-star journey-star-two" />
        </div>

        <div className="journey-photos" aria-hidden="true">
          {journeyAssets.map((asset) => (
            <img className={asset.className} key={asset.src} src={asset.src} alt="" />
          ))}
        </div>

        <div className="journey-dress-display" aria-hidden="true">
          <span className="journey-dress-body" />
          <span className="journey-dress-skirt" />
          <span className="journey-dress-train" />
        </div>

        <div className="journey-bike-wrap" aria-hidden="true">
          <svg
            className="journey-bike"
            fill="none"
            viewBox="0 0 360 190"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle className="bike-wheel" cx="86" cy="132" r="43" />
            <circle className="bike-wheel" cx="268" cy="132" r="43" />
            <circle className="bike-wheel-dot" cx="86" cy="132" r="5" />
            <circle className="bike-wheel-dot" cx="268" cy="132" r="5" />
            <path
              className="bike-frame"
              d="M86 132 134 75h66l68 57m-134-57 44 57H86m92 0 22-57 30-28m-30 28 68 57"
            />
            <path className="bike-frame" d="M124 58h32m66-13h38l16 23" />
            <path className="bike-frame" d="M144 57 132 36m-18 0h42" />
            <circle className="bike-pedal" cx="178" cy="132" r="8" />
            <path className="bike-pedal-line" d="M178 132h25" />
            <path className="bike-rider" d="M164 50c18 10 31 22 39 39l-25 43" />
            <path className="bike-rider" d="M202 89 235 65" />
            <path className="bike-rider" d="M181 132 140 105" />
            <circle className="bike-head" cx="156" cy="34" r="14" />
            <path className="bike-hair" d="M146 27c13-19 35-4 25 13" />
            <path className="bike-skirt" d="M168 70c-20 16-35 35-45 63h80c-5-27-17-48-35-63Z" />
            <path className="bike-scarf" d="M170 47c28 1 50 8 67 23" />
          </svg>
        </div>

        <div className="journey-road" aria-hidden="true">
          <span />
        </div>

        <div className="journey-cards">
          {journeySteps.map((step, index) => (
            <article className={`journey-card journey-card-${index + 1}`} key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

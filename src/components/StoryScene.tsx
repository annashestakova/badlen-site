"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ── MaryTrufel public CDN assets ───────────────────────────────── */
const A = {
  bicycle:
    "https://assets.marytrufel.ru/assets/web2/about/velo-46774d2d4ab16dda9a78b53ca588e118828a41479ffef46b9f2714fba56512e9.svg",
  zagsLight:
    "https://assets.marytrufel.ru/assets/web2/about/zags/zags-light-02-cut-cecabdce7983ae7484b848959a30d803a99864e649fb2973dede391bd547290c.svg",
  zagsDark:
    "https://assets.marytrufel.ru/assets/web2/about/zags/zags-dark-02-cut-b682a6ebcdf535db920f7a5bf978b49bdb6e90f4dec245bf4d0a037fd2727bd4.svg",
  birds:
    "https://assets.marytrufel.ru/assets/web2/about/birds-a9276c45b88ec5466111a0dd6a6930dac4367cbec0695103e1bd8c4cf2dbfdfb.svg",
  girl: {
    sad: "https://assets.marytrufel.ru/assets/web2/about/girl/sad-resize-sprite-optimized-707139691ee9e01cd4d67b812bc737631b1187498a0d0ca8a85e31c066e8fe60.svg",
    smile:
      "https://assets.marytrufel.ru/assets/web2/about/girl/smile-resize-sprite-optimized-eadb2c24f89d9de3138760b6127d9d96dc3a0e61e3ea72fcbcc2f16ea48d34cd.svg",
    veil: "https://assets.marytrufel.ru/assets/web2/about/girl/veil-resize-sprite-optimized-8fd14c6928554d06d676b992e03fb64ec28c32895e643db80277f7be0f2ead3f.svg",
    dressed:
      "https://assets.marytrufel.ru/assets/web2/about/girl/dressed-resize-sprite-optimized-424086614a9a074082dcfdf727ede39b6f801cddea6b87a71e98666dcba9ac65.svg",
  },
  bubbleBig:
    "https://assets.marytrufel.ru/assets/web2/about/bubble-big@2x-01228b0229643f6aadbaf1a76275910a977edf7ecb746b53ffd680baea20ff44.png",
  bubbleMed:
    "https://assets.marytrufel.ru/assets/web2/about/bubble-medium@2x-92b9b4a676178c1150fc940d1788abe6f662cf77e57c61812fc897822dd4effc.png",
  rings:
    "https://assets.marytrufel.ru/assets/web2/about/zags/rings1@2x-5d704f88e467654fd29c3bd3affbbe7baab0cd85f5feabe0f04bf119c532ffca.png",
  needle:
    "https://assets.marytrufel.ru/assets/web2/about/needle@2x-d84ea83db0485ad2ec72974187d47e142cbc3f760dcaa2d64c5ef64e28fddc10.png",
  heart:
    "https://assets.marytrufel.ru/assets/web2/about/heart-sprite@2x-a68e7e43c86a74c128d7dc9ab4aa67f046f4693f2d9328ee557e35be5c3834e9.png",
  flash:
    "https://assets.marytrufel.ru/assets/web2/about/flash@2x-2d02528a393c4fd2df3772928b0a8f11a044967b331bbec70a18afc97723ac90.png",
  comics:
    "https://assets.marytrufel.ru/assets/web2/about/comics-e7b74f012f7e26b0a45698ffcf5574c76b28980e630c72cb0673b6f686084a03.svg",
  unicorn:
    "https://assets.marytrufel.ru/assets/web2/about/unicorn@2x-50d3ae06e046daa60c409bfd7f9781046cfa6ff0a82aa20987377f3f482b7820.png",
  bush:
    "https://assets.marytrufel.ru/assets/web2/about/bush-optimized@2x-fb91aa9a7fc8e6a83819e52eb8460d4b2217bb42f79bfa8847770ee05d74bd00.png",
  parents:
    "https://assets.marytrufel.ru/assets/web2/about/parents@2x-492579f1c50a1adf515b74ae8416fbf3beacad8f3a0d17ccb2b2f7509f35a125.png",
};

/* ── Girl sprite constants ───────────────────────────────────────── */
// SVG viewBox 9044 × 510, 24 animation frames
const GIRL_FRAMES = 24;
const GIRL_SPRITE_ASPECT = 9044 / 510; // ≈ 17.73

/* Road-strip girl: fits inside 130px road strip, standing on the road line */
const GIRL_ROAD_H = 92; // px — height of girl in road strip
const GIRL_ROAD_FRAME_PX = Math.round((GIRL_ROAD_H * GIRL_SPRITE_ASPECT) / GIRL_FRAMES); // ≈ 68px

/* ── Bicycle constants ───────────────────────────────────────────── */
// SVG has similar wide aspect — we show it as-is and let it scale naturally

/* ── Scenes ──────────────────────────────────────────────────────── */
const scenes = [
  {
    id: "inspiration",
    num: "01",
    label: "Вдохновение",
    title: "Всё начинается\nс картинки",
    body: "Вы листаете Pinterest в 11 вечера и сохраняете платья — одно, потом ещё. Ещё нет ни даты, ни ткани — только ощущение.",
    bubble: "...какое платье?",
    bubbleSrc: A.bubbleBig,
    girl: "sad" as const,
    bg: "#faf7f2",
    ink: "#20201d",
    accent: "#b79b64",
    decor: [A.comics, A.unicorn],
    cta: null,
  },
  {
    id: "try",
    num: "02",
    label: "Примерка силуэта",
    title: "Поедьте,\nпримерьте",
    body: "Не чтобы купить — чтобы почувствовать форму. А-силуэт или русалка? Тело даст ответ быстрее, чем Pinterest.",
    bubble: "вот этот силуэт!",
    bubbleSrc: A.bubbleMed,
    girl: "smile" as const,
    bg: "#f2efe8",
    ink: "#20201d",
    accent: "#8b967e",
    decor: [A.heart, A.flash],
    cta: null,
  },
  {
    id: "consult",
    num: "03",
    label: "Консультация в BADLEN",
    title: "Приходите\nс картинками",
    body: "Покажите сохранённое. Мы обсуждаем, что привлекает — силуэт, спина, корсет. И адаптируем под вас.",
    bubble: "вот что я хочу",
    bubbleSrc: A.bubbleBig,
    girl: "smile" as const,
    bg: "#f5efee",
    ink: "#20201d",
    accent: "#b5828c",
    decor: [A.needle, A.flash],
    cta: { label: "Записаться", href: "/contacts" },
  },
  {
    id: "sewing",
    num: "04",
    label: "Пошив и примерки",
    title: "Шьём только\nдля вас",
    body: "Никаких шаблонов — каждая выкройка строится от ваших мерок. 1–2 примерки и образ готов.",
    bubble: "всё по моим меркам!",
    bubbleSrc: A.bubbleMed,
    girl: "veil" as const,
    bg: "#edeaf2",
    ink: "#20201d",
    accent: "#9b8cbd",
    decor: [A.needle, A.heart],
    cta: null,
  },
  {
    id: "zags",
    num: "05",
    label: "Ваш день",
    title: "И вот он\nнаступает",
    body: "Платье готово. Оно ждёт вас. Дорога к ЗАГСу начинается здесь — с первой сохранённой картинки.",
    bubble: "я готова ✦",
    bubbleSrc: A.bubbleBig,
    girl: "dressed" as const,
    bg: "#1c1a17",
    ink: "#f9f5ef",
    accent: "#b79b64",
    decor: [A.rings, A.birds],
    cta: { label: "Начать путь", href: "/contacts" },
  },
] as const;

/* ── Colour lerp ────────────────────────────────────────────────── */
function hexRgb(h: string): [number, number, number] {
  return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
}
function lerp(a: string, b: string, t: number) {
  const [ar, ag, ab] = hexRgb(a);
  const [br, bg, bb] = hexRgb(b);
  return `rgb(${Math.round(ar + (br - ar) * t)},${Math.round(ag + (bg - ag) * t)},${Math.round(ab + (bb - ab) * t)})`;
}

/* ── Main component ─────────────────────────────────────────────── */
export function StoryScene() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [frame, setFrame] = useState(0);

  /* scroll → progress */
  useEffect(() => {
    const onScroll = () => {
      const el = outerRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      setProgress(Math.max(0, Math.min(1, -el.getBoundingClientRect().top / total)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* 12-fps sprite walking cycle */
  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % GIRL_FRAMES), 83);
    return () => clearInterval(id);
  }, []);

  /* derived */
  const N = scenes.length;
  const rawIdx = progress * N;
  const sceneIndex = Math.min(N - 1, Math.floor(rawIdx));
  const sceneProgress = rawIdx % 1;
  const scene = scenes[sceneIndex];
  const nextScene = scenes[Math.min(N - 1, sceneIndex + 1)];

  /* background colour interpolation */
  const bg = sceneProgress > 0.7
    ? lerp(scene.bg, nextScene.bg, (sceneProgress - 0.7) / 0.3)
    : scene.bg;

  /* card visibility per scene */
  function sceneOp(i: number) {
    const lo = i / N, hi = (i + 1) / N;
    if (progress < lo) return 0;
    // Scene 0 starts fully visible (no fade-in from zero)
    if (i === 0 && progress < 0.04) return 1;
    if (progress < lo + 0.05) return (progress - lo) / 0.05;
    if (progress < hi - 0.05) return 1;
    return Math.max(0, 1 - (progress - (hi - 0.05)) / 0.05);
  }

  /* girl walks right→left (slower than bicycle) */
  const girlX = 85 - progress * 110;
  /* bicycle overtakes girl ~28% in, arrives at ЗАГС first */
  const bikeX = 108 - progress * 165;
  const bikeOp = progress > 0.92 ? Math.max(0, 1 - (progress - 0.92) / 0.06) : 1;

  /* ЗАГС */
  const zagsOp = progress > 0.8 ? Math.min(1, (progress - 0.8) / 0.12) : 0;
  const zagsSrc = sceneIndex >= 4 ? A.zagsDark : A.zagsLight;

  /* birds */
  const birdsOp = progress > 0.75 ? Math.min(1, (progress - 0.75) / 0.1) : 0;

  /* girl sprite frame offset for road strip */
  const girlRoadShift = -(frame * GIRL_ROAD_FRAME_PX);

  return (
    <div ref={outerRef} className="sc-outer">
      <div className="sc-sticky" style={{ background: bg }}>

        {/* ── dot nav ── */}
        <nav className="sc-nav" aria-label="Сцены">
          {scenes.map((s, i) => (
            <button
              key={s.id}
              className={`sc-dot${i === sceneIndex ? " active" : ""}`}
              style={{ borderColor: scene.accent, background: i === sceneIndex ? scene.accent : "transparent" }}
              aria-label={s.label}
              onClick={() => {
                const el = outerRef.current;
                if (!el) return;
                const total = el.offsetHeight - window.innerHeight;
                window.scrollTo({ top: (i / N + 0.01) * total + el.offsetTop, behavior: "smooth" });
              }}
            />
          ))}
        </nav>

        {/* ── full-width scene area (top portion) ── */}
        <div className="sc-stage">
          {/* Floating decor per scene */}
          {scenes.map((s, i) => (
            <div key={s.id} className="sc-scene-layer" style={{ opacity: sceneOp(i) }}>
              {s.decor[0] && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.decor[0]} alt="" className="sc-decor sc-decor-1" draggable={false} />
              )}
              {s.decor[1] && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.decor[1]} alt="" className="sc-decor sc-decor-2" draggable={false} />
              )}
            </div>
          ))}

          {/* Text card — floats in centre of stage */}
          <div className="sc-cards">
            {scenes.map((s, i) => (
              <article
                key={s.id}
                className="sc-card"
                style={{ opacity: sceneOp(i), pointerEvents: i === sceneIndex ? "auto" : "none" }}
              >
                <span className="sc-card-num" style={{ color: scene.accent }}>{s.num}</span>
                <p className="sc-card-label" style={{ color: scene.accent }}>{s.label}</p>
                <h2 className="sc-card-title" style={{ color: scene.ink }}>
                  {s.title.split("\n").map((l, j) => <span key={j}>{l}<br /></span>)}
                </h2>
                <p className="sc-card-body" style={{ color: scene.ink }}>{s.body}</p>
                {s.cta && (
                  <Link className="button primary sc-card-cta" href={s.cta.href}
                    style={{ background: scene.accent, borderColor: scene.accent }}>
                    {s.cta.label}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* ── progress bar ── */}
        <div className="sc-progress">
          <div className="sc-progress-fill" style={{ width: `${progress * 100}%`, background: scene.accent }} />
        </div>

        {/* ── birds (appear near end) ── */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={A.birds}
          alt=""
          className="sc-birds"
          style={{ opacity: birdsOp }}
          draggable={false}
          aria-hidden="true"
        />

        {/* ── road strip ── */}
        <div className="sc-road-strip" aria-hidden="true">
          <div className="sc-road">
            <span className="sc-dashes" />
          </div>

          {/* ЗАГС building */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={zagsSrc}
            alt=""
            className="sc-zags"
            style={{ opacity: zagsOp }}
            draggable={false}
          />

          {/* Tandem bicycle */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={A.bicycle}
            alt=""
            className="sc-bicycle"
            style={{
              transform: `translateX(${bikeX}vw)`,
              opacity: bikeOp,
            }}
            draggable={false}
          />

          {/* Girl walking on road — moves left with scroll, slightly slower than bicycle */}
          <div
            className="sc-girl-road-wrap"
            style={{ transform: `translateX(${girlX}vw)` }}
          >
            {/* Speech bubble */}
            <div className="sc-bubble-road" style={{ color: scene.ink }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={scene.bubbleSrc}
                alt=""
                className="sc-bubble-road-img"
                draggable={false}
              />
              <span className="sc-bubble-road-text">{scene.bubble}</span>
            </div>
            {/* Sprite clip window */}
            <div className="sc-girl-road-clip">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={A.girl[scene.girl]}
                alt=""
                className="sc-girl-road-img"
                style={{ transform: `translateX(${girlRoadShift}px)` }}
                draggable={false}
              />
            </div>
          </div>

          {/* Decorative bush at right */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={A.bush} alt="" className="sc-bush" draggable={false} aria-hidden="true" />
        </div>

        {/* ── scroll hint ── */}
        <div className="sc-hint" style={{ opacity: progress < 0.04 ? 1 : 0 }} aria-hidden="true">
          <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
            <rect x="1" y="1" width="18" height="30" rx="9" stroke={scene.accent} strokeWidth="1.5" />
            <rect x="9" y="6" width="2" height="8" rx="1" fill={scene.accent}>
              <animate attributeName="y" values="6;12;6" dur="1.4s" repeatCount="indefinite" />
            </rect>
          </svg>
          <span style={{ color: scene.accent }}>прокрутите</span>
        </div>

      </div>
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const petals = [
  { width: 18, height: 18, left: "10%", duration: "12s", delay: "0s" },
  { width: 28, height: 28, left: "22%", duration: "17s", delay: "2s" },
  { width: 14, height: 14, left: "35%", duration: "10s", delay: "5s" },
  { width: 36, height: 36, left: "47%", duration: "14s", delay: "1s" },
  { width: 20, height: 20, left: "58%", duration: "9s", delay: "7s" },
  { width: 12, height: 12, left: "70%", duration: "18s", delay: "3s" },
  { width: 32, height: 32, left: "80%", duration: "11s", delay: "8s" },
  { width: 24, height: 24, left: "90%", duration: "15s", delay: "4s" },
];

export default function NotFound() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [animData, setAnimData] = useState<any>(null);

  useEffect(() => {
    fetch("/animations/pink-cat.json")
      .then((r) => r.json())
      .then(setAnimData)
      .catch(() => null);
  }, []);

  return (
    <div className="not-found-page">
      {petals.map((p, i) => (
        <div
          key={i}
          className="not-found-petal"
          style={{
            width: p.width,
            height: p.height,
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      <div className="not-found-404" aria-hidden="true">404</div>

      <div className="not-found-cat">
        {animData && (
          <Lottie
            animationData={animData}
            loop
            autoplay
            style={{ width: 300, height: 300 }}
          />
        )}
      </div>

      <h1 className="not-found-title">Кажется, это платье улетело</h1>
      <p className="not-found-text">
        Страница не найдена — но мы найдём для вас идеальный образ.
      </p>

      <div className="not-found-actions">
        <Link className="button primary" href="/">На главную</Link>
        <Link className="button ghost" href="/wedding-dresses">Смотреть платья</Link>
      </div>
    </div>
  );
}

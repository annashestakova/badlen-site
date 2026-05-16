"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function FittingAnimation() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [animData, setAnimData] = useState<any>(null);

  useEffect(() => {
    fetch("/animations/fitting.json")
      .then((r) => r.json())
      .then(setAnimData)
      .catch(() => null);
  }, []);

  if (!animData) return null;

  return (
    <Lottie
      animationData={animData}
      loop
      autoplay
      className="fitting-lottie"
    />
  );
}

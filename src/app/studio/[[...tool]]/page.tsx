"use client";

/**
 * BADLEN Studio — редактор контента
 * Доступен по адресу /studio
 */
import dynamic from "next/dynamic";
import config from "../../../../sanity.config";

// Studio загружается только на клиенте (SSR несовместим)
const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  { ssr: false, loading: () => <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>Загрузка студии…</div> }
);

export default function StudioPage() {
  return <NextStudio config={config} />;
}

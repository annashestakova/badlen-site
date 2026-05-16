import type { Metadata } from "next";
import Image from "next/image";
import { corsetLooks } from "@/data/site";
import { PhotoCard } from "@/components/PhotoCard";

export const metadata: Metadata = {
  title: "Образы",
  description:
    "Образы BADLEN: подборки корсетов и комплектов для свадьбы, росписи, вечера и city-стиля.",
  alternates: {
    canonical: "/lookbook",
  },
};

export default function LookbookPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Образы</p>
          <h1>Образы</h1>
          <p className="page-subtitle">
            Короткие подборки, которые помогают быстро выбрать настроение будущего образа.
          </p>
        </div>
        <Image
          src="/corsets/corset-19.jpeg"
          alt="Образ с корсетом BADLEN"
          width={1200}
          height={1600}
          sizes="(max-width: 1080px) 100vw, 38vw"
        />
      </section>

      <section className="section">
        <div className="lookbook-grid">
          {corsetLooks.map((look) => (
            <PhotoCard
              image={look.image}
              key={look.title}
              text={look.text}
              title={look.title}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

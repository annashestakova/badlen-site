import type { Metadata } from "next";
import Image from "next/image";
import { CorsetBuilder } from "@/components/CorsetBuilder";

export const metadata: Metadata = {
  title: "Конструктор",
  description:
    "Онлайн-конструктор корсета BADLEN: тип, ткань, застежка, декор и переход к меркам и заявке на пошив.",
  alternates: {
    canonical: "/corset-constructor",
  },
};

export default function CorsetConstructorPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Конструктор</p>
          <h1>Сборка</h1>
          <p className="page-subtitle">
            Выберите тип, ткань, застежку и декор, а затем передайте конфигурацию в заказ.
          </p>
          <p>
            Калькулятор показывает ориентир по типу корсета, ткани, застежке и
            декору. После выбора конфигурация передается в форму мерок и заявку
            на пошив.
          </p>
        </div>
        <Image
          src="/corsets/corset-21.jpeg"
          alt="Корсетный образ"
          width={1200}
          height={1600}
          sizes="(max-width: 1080px) 100vw, 38vw"
        />
      </section>
      <section className="section">
        <CorsetBuilder />
      </section>
    </main>
  );
}

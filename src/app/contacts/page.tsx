import type { Metadata } from "next";
import { QrBlock } from "@/components/QrBlock";
import { BookingWidget } from "@/components/BookingWidget";
import { telegramUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Контакты BADLEN: запись на примерку в Бресте, консультации по пошиву платьев и онлайн-заказы корсетов по Беларуси.",
  alternates: {
    canonical: "/contacts",
  },
};

export default function ContactsPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Контакты</p>
          <h1>Запись</h1>
          <p className="page-subtitle">
            Платья ведем через мастерскую в Бресте, корсеты принимаем онлайн по всей Беларуси.
          </p>
          <p>
            Для заказа пошива пишите заранее. Для корсета можно перейти в
            конструктор, пройти гайд по меркам и отправить заказ дистанционно.
          </p>
          <div className="button-row">
            <a className="button primary" href={telegramUrl} rel="noreferrer" target="_blank">
              Открыть Telegram
            </a>
          </div>
        </div>
        <QrBlock />
      </section>

      <section className="section muted">
        <div className="section-heading">
          <p className="eyebrow">Запись онлайн</p>
          <h2>Выбрать дату и время</h2>
          <p className="caption">
            Выберите удобный день, время и услугу — подтверждение придёт в Telegram.
          </p>
        </div>
        <BookingWidget />
      </section>
    </main>
  );
}

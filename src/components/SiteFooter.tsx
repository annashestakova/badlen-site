import Link from "next/link";
import { navigation, telegramHandle, telegramUrl, weddingChecklist } from "@/data/site";

function FooterLogo() {
  return (
    <span className="badlen-logo">
      <span className="logo-wordmark-row">
        <svg className="logo-rule-svg" width="18" height="2" viewBox="0 0 18 2" aria-hidden="true">
          <line x1="0" y1="1" x2="18" y2="1" stroke="currentColor" strokeWidth="0.8"/>
        </svg>
        <span className="logo-name" style={{ fontSize: "1.1rem" }}>BADLEN</span>
        <svg className="logo-rule-svg" width="18" height="2" viewBox="0 0 18 2" aria-hidden="true">
          <line x1="0" y1="1" x2="18" y2="1" stroke="currentColor" strokeWidth="0.8"/>
        </svg>
      </span>
      <span className="logo-tagline">Salon · Atelier · Брест</span>
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-intro">
        <Link className="brand" href="/">
          <FooterLogo />
          <span className="brand-copy">
            <strong>BADLEN</strong>
            <small>салон · ателье · брест</small>
          </span>
        </Link>
      <p>
        Свадебные и вечерние платья в Бресте — индивидуальный пошив, ателье и
        корсеты на заказ по Беларуси.
      </p>
      <p className="small-note">
        Каждое платье шьётся по меркам — от эскиза до финальной посадки.
      </p>
    </div>
      <div className="footer-links">
        <div>
          <p className="eyebrow">Разделы</p>
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <p className="eyebrow">Контакт</p>
          <p>Брест · работа по записи</p>
          <a href={telegramUrl} rel="noreferrer" target="_blank">
            {telegramHandle}
          </a>
          <p className="small-note">Консультации, согласование пошива и онлайн-заказы корсетов.</p>
        </div>
        <div>
          <p className="eyebrow">Внутри сайта</p>
          <Link href="/story">История</Link>
          <Link href="/lookbook">Образы</Link>
          <Link href="/evening-dresses">Вечерние</Link>
          <Link href="/prices">Цены</Link>
          <Link href="/fabrics">Ткани</Link>
          <Link href="/measurements-guide">Мерки</Link>
        </div>
      </div>
      {/* "Перед свадьбой" checklist — hidden */}
    </footer>
  );
}

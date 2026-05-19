import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика куки · BADLEN",
  description: "Политика использования файлов cookie на сайте BADLEN в соответствии с законодательством РБ.",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "120px 24px 80px" }}>
      <article style={{ fontFamily: "var(--font-sans, sans-serif)", color: "#2a1e18", lineHeight: 1.75 }}>

        <p style={{ fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#8b5a42", marginBottom: 16 }}>
          Юридическая информация
        </p>
        <h1 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 400, fontSize: "clamp(1.8rem,4vw,2.8rem)", marginBottom: 8, lineHeight: 1.15 }}>
          Политика файлов cookie
        </h1>
        <p style={{ color: "#7a6055", fontSize: "0.85rem", marginBottom: 48 }}>
          Редакция от 19 мая 2026 г.
        </p>

        <Section title="1. Что такое cookie-файлы">
          <p>
            Cookie-файлы (куки) — небольшие текстовые файлы, которые сохраняются в браузере вашего
            устройства при посещении сайта. Они позволяют сайту запоминать ваши предпочтения,
            улучшать работу и анализировать использование сайта.
          </p>
          <p>
            Использование cookie-файлов регулируется{" "}
            <strong>Законом Республики Беларусь от 07.05.2021 № 99-З «О защите персональных данных»</strong>{" "}
            и Законом РБ от 10.11.2008 № 455-З «Об информации, информатизации и защите информации».
          </p>
        </Section>

        <Section title="2. Какие cookie мы используем">
          <CookieTable rows={[
            {
              name: "badlen_cookie_consent",
              type: "Необходимые",
              purpose: "Хранит ваш выбор в отношении использования cookie-файлов (согласен / не согласен).",
              duration: "1 год",
              thirdParty: "Нет",
            },
            {
              name: "_vercel_*",
              type: "Технические",
              purpose: "Технические cookie хостинг-платформы Vercel для обеспечения работоспособности сайта.",
              duration: "Сессия / до 1 года",
              thirdParty: "Vercel Inc.",
            },
            {
              name: "next-auth.*",
              type: "Технические",
              purpose: "Технические cookie фреймворка Next.js (если применяется аутентификация).",
              duration: "Сессия",
              thirdParty: "Нет",
            },
          ]} />
          <p style={{ marginTop: 16, fontSize: "0.83rem", color: "#7a6055" }}>
            * Если вы не дали согласие на использование cookie, хранятся только необходимые
            технические файлы, обеспечивающие работу сайта. Аналитические и маркетинговые
            cookie не используются без явного согласия.
          </p>
        </Section>

        <Section title="3. Необходимые cookie">
          <p>
            Необходимые cookie обеспечивают базовую функциональность сайта. Без них сайт не может
            корректно работать. Они не требуют отдельного согласия в соответствии со статьёй 6
            Закона о ПДн (обработка в интересах субъекта / оператора).
          </p>
        </Section>

        <Section title="4. Как управлять cookie">
          <p>Вы можете управлять cookie-файлами следующими способами:</p>
          <ol>
            <li>
              <strong>Через баннер на сайте:</strong> при первом посещении вы видите уведомление
              с кнопками «Согласен» и «Не согласен». Выбор сохраняется на 1 год.
            </li>
            <li>
              <strong>Через настройки браузера:</strong> вы можете заблокировать или удалить
              cookie-файлы в настройках вашего браузера (раздел «Конфиденциальность» /
              «Безопасность»). Обратите внимание, что блокировка всех cookie может нарушить
              корректную работу сайта.
            </li>
          </ol>
          <BrowserLinks />
        </Section>

        <Section title="5. Cookie третьих лиц">
          <p>
            Сайт может содержать элементы сторонних сервисов (Telegram-виджеты, шрифты Google Fonts).
            Эти сервисы могут устанавливать собственные cookie. Политика конфиденциальности
            и использования cookie данных сервисов доступна на их официальных сайтах:
          </p>
          <ul>
            <li>
              <a href="https://telegram.org/privacy" style={{ color: "#8b5a42" }}>
                Telegram Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://policies.google.com/privacy" style={{ color: "#8b5a42" }}>
                Google Privacy Policy (Google Fonts)
              </a>
            </li>
            <li>
              <a href="https://vercel.com/legal/privacy-policy" style={{ color: "#8b5a42" }}>
                Vercel Privacy Policy
              </a>
            </li>
          </ul>
        </Section>

        <Section title="6. Изменения политики">
          <p>
            Настоящая Политика может быть обновлена. Актуальная версия публикуется на странице{" "}
            <strong>badlen.by/cookies</strong>. При существенных изменениях мы уведомим вас
            через баннер на сайте.
          </p>
        </Section>

        <Section title="7. Контакты">
          <p>
            По вопросам использования cookie-файлов:<br />
            E-mail: <a href="mailto:info@badlen.by" style={{ color: "#8b5a42" }}>info@badlen.by</a><br />
            Telegram: <a href="https://t.me/svadebnyeplatya_bot" style={{ color: "#8b5a42" }}>@svadebnyeplatya_bot</a>
          </p>
        </Section>

        <p style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid rgba(120,80,60,0.12)", fontSize: "0.78rem", color: "#9a7a6a" }}>
          © BADLEN, 2026. Все права защищены.
        </p>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 500, fontSize: "1.2rem", color: "#3a2c24", marginBottom: 14, paddingBottom: 8, borderBottom: "1px solid rgba(120,80,60,0.12)" }}>
        {title}
      </h2>
      <div style={{ fontSize: "0.9rem", color: "#3a2c24" }}>{children}</div>
    </section>
  );
}

type CookieRow = { name: string; type: string; purpose: string; duration: string; thirdParty: string };
function CookieTable({ rows }: { rows: CookieRow[] }) {
  const headers = ["Название", "Тип", "Назначение", "Срок", "Третья сторона"];
  return (
    <div style={{ overflowX: "auto", marginTop: 12 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
        <thead>
          <tr>
            {headers.map(h => (
              <th key={h} style={{ textAlign: "left", padding: "8px 10px", background: "rgba(139,90,66,0.07)", color: "#3a2c24", fontWeight: 600, borderBottom: "1px solid rgba(120,80,60,0.15)", whiteSpace: "nowrap" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "rgba(139,90,66,0.03)" }}>
              <td style={tdStyle}><code style={{ fontSize: "0.78rem", background: "rgba(139,90,66,0.07)", padding: "1px 5px", borderRadius: 3 }}>{r.name}</code></td>
              <td style={tdStyle}>{r.type}</td>
              <td style={tdStyle}>{r.purpose}</td>
              <td style={{ ...tdStyle, whiteSpace: "nowrap" }}>{r.duration}</td>
              <td style={tdStyle}>{r.thirdParty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tdStyle: React.CSSProperties = {
  padding: "8px 10px",
  borderBottom: "1px solid rgba(120,80,60,0.08)",
  verticalAlign: "top",
  color: "#3a2c24",
};

function BrowserLinks() {
  const browsers = [
    { name: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
    { name: "Firefox", url: "https://support.mozilla.org/ru/kb/cookies-information-websites-store-on-your-computer" },
    { name: "Safari", url: "https://support.apple.com/ru-ru/guide/safari/sfri11471/mac" },
    { name: "Edge", url: "https://support.microsoft.com/ru-ru/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
  ];
  return (
    <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 12 }}>
      {browsers.map(b => (
        <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: "0.82rem", color: "#8b5a42", textDecoration: "underline" }}>
          Инструкция для {b.name}
        </a>
      ))}
    </div>
  );
}

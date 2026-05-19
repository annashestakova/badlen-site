"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Consent = "agreed" | "refused" | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("badlen_cookie_consent") as Consent;
    setConsent(stored);
    setMounted(true);
  }, []);

  function agree() {
    localStorage.setItem("badlen_cookie_consent", "agreed");
    setConsent("agreed");
  }

  function refuse() {
    localStorage.setItem("badlen_cookie_consent", "refused");
    setConsent("refused");
  }

  // Not mounted yet — don't render anything (SSR safe)
  if (!mounted) return null;

  const showHaze = consent !== "agreed";
  const showBanner = consent !== "agreed"; // show banner until explicitly agreed

  return (
    <>
      {/* ── Haze overlay — covers page until consent given ── */}
      {showHaze && (
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9000,
            backdropFilter: "blur(6px) brightness(0.92)",
            WebkitBackdropFilter: "blur(6px) brightness(0.92)",
            background: "rgba(245,235,230,0.35)",
            pointerEvents: showBanner ? "none" : "none",
            transition: "opacity 0.5s ease",
          }}
        />
      )}

      {/* ── Cookie banner ── */}
      {showBanner && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Уведомление об использовании куки"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            background: "rgba(255,255,255,0.97)",
            borderTop: "1px solid rgba(180,140,120,0.18)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            padding: "20px 24px",
            boxShadow: "0 -4px 40px rgba(120,80,60,0.10)",
          }}
        >
          <div style={{
            maxWidth: 860,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "16px 24px",
          }}>
            {/* Text */}
            <div style={{ flex: "1 1 400px", minWidth: 0 }}>
              <p style={{
                fontFamily: "var(--font-sans, sans-serif)",
                fontSize: "0.8rem",
                lineHeight: 1.6,
                color: "#3a2c24",
                margin: 0,
              }}>
                <strong style={{ fontSize: "0.88rem" }}>Файлы cookie и обработка данных</strong>
                <br />
                Этот сайт использует файлы cookie и обрабатывает персональные данные в соответствии
                с Законом Республики Беларусь от 07.05.2021 № 99-З «О защите персональных данных»
                и Законом РБ от 10.11.2008 № 455-З «Об информации, информатизации и защите информации».
                {" "}
                <Link href="/privacy" style={{ color: "#8b5a42", textDecoration: "underline" }}>
                  Политика конфиденциальности
                </Link>
                {" · "}
                <Link href="/cookies" style={{ color: "#8b5a42", textDecoration: "underline" }}>
                  Политика куки
                </Link>
              </p>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: 12, flexShrink: 0, flexWrap: "wrap" }}>
              <button
                onClick={agree}
                style={{
                  padding: "10px 28px",
                  background: "#3a2c24",
                  color: "#fff",
                  border: "none",
                  borderRadius: 0,
                  fontFamily: "var(--font-sans, sans-serif)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "background 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#5c3d2e")}
                onMouseLeave={e => (e.currentTarget.style.background = "#3a2c24")}
              >
                Согласен
              </button>
              <button
                onClick={refuse}
                style={{
                  padding: "10px 28px",
                  background: "transparent",
                  color: "#7a6055",
                  border: "1px solid rgba(120,80,60,0.3)",
                  borderRadius: 0,
                  fontFamily: "var(--font-sans, sans-serif)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "border-color 0.2s, color 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#8b5a42"; e.currentTarget.style.color = "#3a2c24"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(120,80,60,0.3)"; e.currentTarget.style.color = "#7a6055"; }}
              >
                Не согласен
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

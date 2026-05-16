"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";

function BadlenLogo() {
  return (
    <span className="badlen-logo">
      <span className="logo-wordmark-row">
        <svg className="logo-rule-svg" width="22" height="2" viewBox="0 0 22 2" aria-hidden="true">
          <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="0.8"/>
        </svg>
        <span className="logo-name">BADLEN</span>
        <svg className="logo-rule-svg" width="22" height="2" viewBox="0 0 22 2" aria-hidden="true">
          <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="0.8"/>
        </svg>
      </span>
      <span className="logo-tagline">Salon · Atelier · Брест</span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <Link className="brand" href="/" onClick={() => setOpen(false)}>
        <BadlenLogo />
      </Link>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="nav-overlay"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        className={`nav${open ? " nav-open" : ""}`}
        aria-label="Основная навигация"
      >
        {navigation.map((item) => (
          <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link
          className="button soft nav-cta-mobile"
          href="/contacts"
          onClick={() => setOpen(false)}
        >
          Записаться
        </Link>
      </nav>

      <div className="header-cta header-cta-desktop">
        <Link className="button soft" href="/contacts">
          Запись
        </Link>
      </div>

      <button
        className={`hamburger${open ? " is-open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
      >
        <span className="ham-line" />
        <span className="ham-line" />
        <span className="ham-line" />
      </button>
    </header>
  );
}

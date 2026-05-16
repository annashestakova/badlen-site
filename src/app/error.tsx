"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="not-found-page">
      <div className="not-found-cat" style={{ marginBottom: "1rem" }}>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
          <circle cx="40" cy="40" r="36" stroke="var(--rose)" strokeWidth="2" opacity="0.4" />
          {/* Needle */}
          <line x1="40" y1="18" x2="40" y2="52" stroke="var(--ink-soft)" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="40" cy="17" rx="4" ry="3" fill="var(--ink-soft)" opacity="0.7" />
          <ellipse cx="40.5" cy="18.5" rx="1.5" ry="1" fill="var(--paper)" />
          {/* Thread */}
          <path d="M40 52 Q30 62 24 72" stroke="var(--rose)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" />
          {/* Sad expression */}
          <circle cx="28" cy="38" r="2.5" fill="var(--ink-soft)" opacity="0.5" />
          <circle cx="52" cy="38" r="2.5" fill="var(--ink-soft)" opacity="0.5" />
          <path d="M30 50 Q40 45 50 50" stroke="var(--ink-soft)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>

      <h1 className="not-found-title">Что-то пошло не так</h1>
      <p className="not-found-text">
        {error.message || "Попробуйте обновить страницу."}
      </p>

      <div className="not-found-actions">
        <button className="button primary" onClick={reset}>
          Попробовать снова
        </button>
        <Link className="button ghost" href="/">На главную</Link>
      </div>
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";

const SERVICES = [
  "Консультация и подбор образа",
  "Ателье — подгонка платья",
  "Ателье — пошив на заказ",
  "Обсуждение заказа корсета",
];

const TIME_SLOTS = ["14:30", "16:00", "17:30"];

const MONTHS = [
  "Январь","Февраль","Март","Апрель","Май","Июнь",
  "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",
];
const DAYS = ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstWeekday(year: number, month: number) {
  const d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1;
}
function formatDate(year: number, month: number, day: number) {
  return `${String(day).padStart(2,"0")}.${String(month+1).padStart(2,"0")}.${year}`;
}

const STEPS = ["Дата","Контакты","Готово"];

export function BookingWidget() {
  const today = new Date();
  const [step, setStep] = useState(0);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(SERVICES[0]);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<"idle"|"sending"|"done"|"error">("idle");

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstWeekday = getFirstWeekday(viewYear, viewMonth);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y-1); }
    else setViewMonth(m => m-1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y+1); }
    else setViewMonth(m => m+1);
  };
  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day); d.setHours(0,0,0,0);
    const t = new Date(); t.setHours(0,0,0,0);
    return d < t;
  };
  const selectedDate = useMemo(
    () => selectedDay ? formatDate(viewYear, viewMonth, selectedDay) : null,
    [selectedDay, viewYear, viewMonth]
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, date: selectedDate, time: selectedTime, service }),
      });
      if (res.ok) { setStatus("done"); setStep(2); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <div className="bw-wrap">
      {/* Decorative blobs */}
      <div className="bw-blob bw-blob-1" aria-hidden />
      <div className="bw-blob bw-blob-2" aria-hidden />

      <div className="bw-card">
        {/* Header */}
        <div className="bw-header">
          <p className="bw-eyebrow">BADLEN · Брест</p>
          <h2 className="bw-title">Запись на примерку</h2>
          <p className="bw-sub">Пн–Вс · 14:30–18:00 · Подтверждение в Telegram</p>
        </div>

        {/* Step indicator */}
        <div className="bw-steps">
          {STEPS.map((s, i) => (
            <div key={s} className={`bw-step${step === i ? " active" : ""}${step > i ? " done" : ""}`}>
              <div className="bw-step-dot">{step > i ? "✓" : i + 1}</div>
              <span>{s}</span>
            </div>
          ))}
        </div>

        {/* Step 0 — calendar */}
        {step === 0 && (
          <div className="bw-body bw-animate-in">
            <div className="bw-service-row">
              {SERVICES.map(s => (
                <button
                  key={s}
                  type="button"
                  className={`bw-service-btn${service === s ? " active" : ""}`}
                  onClick={() => setService(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="bw-cal">
              <div className="bw-cal-header">
                <button type="button" className="bw-cal-nav" onClick={prevMonth}>‹</button>
                <span className="bw-cal-month">{MONTHS[viewMonth]} {viewYear}</span>
                <button type="button" className="bw-cal-nav" onClick={nextMonth}>›</button>
              </div>
              <div className="bw-cal-grid">
                {DAYS.map(d => <span key={d} className="bw-cal-label">{d}</span>)}
                {Array.from({ length: firstWeekday }).map((_, i) => <span key={`e${i}`} />)}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const past = isPast(day);
                  const active = selectedDay === day;
                  return (
                    <button
                      key={day}
                      type="button"
                      className={`bw-cal-cell${past ? " past" : ""}${active ? " active" : ""}`}
                      disabled={past}
                      onClick={() => { setSelectedDay(day); setSelectedTime(null); }}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {selectedDay && (
              <div className="bw-slots bw-animate-in">
                <p className="bw-slots-label">Выберите время</p>
                <div className="bw-slots-row">
                  {TIME_SLOTS.map(t => (
                    <button
                      key={t}
                      type="button"
                      className={`bw-slot${selectedTime === t ? " active" : ""}`}
                      onClick={() => setSelectedTime(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              type="button"
              className="bw-next"
              disabled={!selectedDay || !selectedTime}
              onClick={() => setStep(1)}
            >
              Далее →
            </button>
          </div>
        )}

        {/* Step 1 — contacts */}
        {step === 1 && (
          <form className="bw-body bw-animate-in" onSubmit={handleSubmit}>
            <div className="bw-chosen">
              <span className="bw-chosen-date">📅 {selectedDate} · {selectedTime}</span>
              <span className="bw-chosen-service">{service}</span>
            </div>

            <div className="bw-fields">
              <label className="bw-field">
                <span>Ваше имя</span>
                <input
                  type="text"
                  placeholder="Анастасия"
                  value={name}
                  required
                  onChange={e => setName(e.target.value)}
                />
              </label>
              <label className="bw-field">
                <span>Телефон</span>
                <input
                  type="tel"
                  placeholder="+375 __ ___ __ __"
                  value={phone}
                  required
                  onChange={e => setPhone(e.target.value)}
                />
              </label>
            </div>

            <p className="bw-hint">
              После отправки вы получите подтверждение в Telegram.
            </p>

            <label style={{ display:"flex", alignItems:"flex-start", gap:10, marginTop:"0.75rem", cursor:"pointer" }}>
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={e => setPrivacyAccepted(e.target.checked)}
                required
                style={{ marginTop:3, accentColor:"#3a2c24", width:15, height:15, flexShrink:0 }}
              />
              <span style={{ fontSize:"0.78rem", lineHeight:1.5, color:"#7a6055" }}>
                Я согласен(-на) на{" "}
                <a href="/privacy" style={{ color:"#8b5a42", textDecoration:"underline" }}>
                  обработку персональных данных
                </a>{" "}
                в соответствии с Законом РБ от 07.05.2021 № 99-З
              </span>
            </label>

            <div className="bw-btn-row">
              <button type="button" className="bw-back" onClick={() => setStep(0)}>← Назад</button>
              <button
                type="submit"
                className="bw-submit"
                disabled={!name || !phone || !privacyAccepted || status === "sending"}
              >
                {status === "sending" ? (
                  <span className="bw-spinner" />
                ) : "Записаться"}
              </button>
            </div>

            {status === "error" && (
              <p className="bw-error">
                Ошибка. Напишите нам: <a href="https://t.me/svadebnyeplatya_bot">@svadebnyeplatya_bot</a>
              </p>
            )}
          </form>
        )}

        {/* Step 2 — success */}
        {step === 2 && (
          <div className="bw-body bw-animate-in bw-success">
            <div className="bw-success-ring">✓</div>
            <h3>Запись принята!</h3>
            <p><strong>{selectedDate}</strong> в <strong>{selectedTime}</strong></p>
            <p className="bw-hint">{service}</p>
            <p className="bw-hint">Подтвердим в Telegram в течение нескольких часов.</p>
            <a className="bw-tg" href="https://t.me/svadebnyeplatya_bot">Написать в Telegram →</a>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";

const SERVICES = [
  "Консультация и подбор образа",
  "Ателье — подгонка платья",
  "Ателье — пошив на заказ",
  "Обсуждение заказа корсета",
];

// Slots available every day 14:30 – 18:00
const TIME_SLOTS = ["14:30", "16:00", "17:30"];

const MONTHS = [
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
];
const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstWeekday(year: number, month: number) {
  // Monday-first: 0=Mon ... 6=Sun
  const d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1;
}

function formatDate(year: number, month: number, day: number) {
  return `${String(day).padStart(2, "0")}.${String(month + 1).padStart(2, "0")}.${year}`;
}

export function BookingWidget() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(SERVICES[0]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstWeekday = getFirstWeekday(viewYear, viewMonth);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    d.setHours(0, 0, 0, 0);
    const t = new Date(); t.setHours(0, 0, 0, 0);
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
      if (res.ok) setStatus("done");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="booking-success">
        <div className="booking-success-icon">🌸</div>
        <h3>Запись принята!</h3>
        <p>
          <strong>{selectedDate}</strong> в <strong>{selectedTime}</strong><br />
          Услуга: {service}
        </p>
        <p className="caption">
          Мы подтвердим запись в Telegram в течение нескольких часов.
          Если не получили ответ — напишите нам напрямую.
        </p>
        <a className="button ghost" href="https://t.me/svadebnyeplatya_bot">
          Написать в Telegram
        </a>
      </div>
    );
  }

  return (
    <form className="booking-widget" onSubmit={handleSubmit}>
      <div className="booking-left">
        {/* Calendar */}
        <div className="booking-calendar">
          <div className="cal-header">
            <button type="button" className="cal-nav" onClick={prevMonth}>‹</button>
            <span className="cal-month">{MONTHS[viewMonth]} {viewYear}</span>
            <button type="button" className="cal-nav" onClick={nextMonth}>›</button>
          </div>
          <div className="cal-grid">
            {DAYS.map(d => <span key={d} className="cal-day-label">{d}</span>)}
            {/* Empty cells before first day */}
            {Array.from({ length: firstWeekday }).map((_, i) => (
              <span key={`empty-${i}`} className="cal-cell empty" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const past = isPast(day);
              const active = selectedDay === day;
              return (
                <button
                  key={day}
                  type="button"
                  className={`cal-cell${past ? " past" : ""}${active ? " active" : ""}`}
                  disabled={past}
                  onClick={() => { setSelectedDay(day); setSelectedTime(null); }}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time slots */}
        {selectedDay && (
          <div className="booking-slots">
            <p className="eyebrow">Выберите время</p>
            <div className="slot-row">
              {TIME_SLOTS.map(t => (
                <button
                  key={t}
                  type="button"
                  className={`slot-btn${selectedTime === t ? " active" : ""}`}
                  onClick={() => setSelectedTime(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="booking-right">
        <div className="booking-summary">
          {selectedDate && selectedTime
            ? <><strong>{selectedDate}</strong> · {selectedTime}</>
            : <span className="caption">Выберите дату и время</span>
          }
        </div>

        <label className="booking-field">
          <span>Услуга</span>
          <select value={service} onChange={e => setService(e.target.value)}>
            {SERVICES.map(s => <option key={s}>{s}</option>)}
          </select>
        </label>

        <label className="booking-field">
          <span>Имя</span>
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            required
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label className="booking-field">
          <span>Телефон</span>
          <input
            type="tel"
            placeholder="+375 __ ___ __ __"
            value={phone}
            required
            onChange={e => setPhone(e.target.value)}
          />
        </label>

        <p className="caption" style={{ marginTop: "0.5rem" }}>
          После отправки вы получите подтверждение в Telegram. Запись действует
          только после подтверждения с нашей стороны.
        </p>

        <button
          type="submit"
          className="button primary"
          disabled={!selectedDate || !selectedTime || !name || !phone || status === "sending"}
          style={{ marginTop: "1rem", width: "100%" }}
        >
          {status === "sending" ? "Отправляем..." : "Записаться"}
        </button>

        {status === "error" && (
          <p style={{ color: "var(--rose-deep)", marginTop: "0.5rem", fontSize: "0.88rem" }}>
            Ошибка отправки. Напишите нам напрямую:{" "}
            <a href="https://t.me/svadebnyeplatya_bot">@svadebnyeplatya_bot</a>
          </p>
        )}
      </div>
    </form>
  );
}

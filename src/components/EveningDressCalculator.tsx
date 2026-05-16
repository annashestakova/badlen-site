"use client";

import { useMemo, useState } from "react";
import { eveningDressBase, eveningDressOptions } from "@/data/site";

type EveningBase = (typeof eveningDressBase)[number];

export function EveningDressCalculator() {
  const [base, setBase] = useState<EveningBase>(eveningDressBase[0]);
  const [options, setOptions] = useState<string[]>([]);

  const total = useMemo(() => {
    const selected = eveningDressOptions.filter((o) => options.includes(o.key));
    const subtotal = selected.reduce<number>((sum, item) => sum + item.price, base.price);
    return options.includes("urgent") ? Math.round(subtotal * 1.3) : subtotal;
  }, [base, options]);

  function toggleOption(key: string) {
    setOptions((current) =>
      current.includes(key) ? current.filter((k) => k !== key) : [...current, key],
    );
  }

  return (
    <div className="calc-grid">
      <div className="calc-panel">
        <h3>1. Длина и стиль</h3>
        <div className="option-list">
          {eveningDressBase.map((item) => (
            <button
              className={`option-button ${base.key === item.key ? "active" : ""}`}
              key={item.key}
              onClick={() => setBase(item)}
              type="button"
            >
              {item.label} · от {item.price} BYN
            </button>
          ))}
        </div>
      </div>
      <div className="calc-panel">
        <h3>2. Детали</h3>
        <div className="option-list">
          {eveningDressOptions.map((item) => (
            <button
              className={`option-button ${options.includes(item.key) ? "active" : ""}`}
              key={item.key}
              onClick={() => toggleOption(item.key)}
              type="button"
            >
              {item.label}
              {item.price > 0 ? ` · +${item.price} BYN` : ""}
            </button>
          ))}
        </div>
      </div>
      <div className="calc-panel">
        <h3>3. Предварительно</h3>
        <p>
          Точная сумма — после консультации и выбора ткани. Обязательны 1–2
          примерки в Бресте. Диапазон вечерних: 350–1 000 BYN.
        </p>
        <div className="total-box">
          <span>ориентир стоимости</span>
          <strong>{total} BYN</strong>
          <span>старт от 350 BYN</span>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { dressBase, dressOptions } from "@/data/site";

type DressBase = (typeof dressBase)[number];

export function DressCalculator() {
  const [base, setBase] = useState<DressBase>(dressBase[0]);
  const [options, setOptions] = useState<string[]>([]);

  const total = useMemo(() => {
    const selected = dressOptions.filter((option) => options.includes(option.key));
    const subtotal = selected.reduce<number>((sum, item) => sum + item.price, base.price);
    return options.includes("urgent") ? Math.round(subtotal * 1.3) : subtotal;
  }, [base, options]);

  function toggleOption(key: string) {
    setOptions((current) =>
      current.includes(key)
        ? current.filter((item) => item !== key)
        : [...current, key],
    );
  }

  return (
    <div className="calc-grid">
      <div className="calc-panel">
        <h3>1. Основа</h3>
        <div className="option-list">
          {dressBase.map((item) => (
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
        <h3>2. Усложнение</h3>
        <div className="option-list">
          {dressOptions.map((item) => (
            <button
              className={`option-button ${
                options.includes(item.key) ? "active" : ""
              }`}
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
          Точная цена фиксируется после консультации, выбора ткани и оценки
          сложности. Для платья обязательны 1-2 примерки в Бресте.
        </p>
        <div className="total-box">
          <span>ориентир стоимости</span>
          <strong>{total} BYN</strong>
          <span>старт не ниже 700 BYN</span>
        </div>
      </div>
    </div>
  );
}

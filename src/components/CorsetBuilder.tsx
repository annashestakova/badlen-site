"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { closures, corsetOptions, corsetTypes, fabrics } from "@/data/site";

type CorsetType = (typeof corsetTypes)[number];
type Fabric = (typeof fabrics)[number];
type Closure = (typeof closures)[number];

export function CorsetBuilder() {
  const router = useRouter();
  const [type, setType] = useState<CorsetType>(corsetTypes[1]);
  const [fabric, setFabric] = useState<Fabric>(fabrics[0]);
  const [closure, setClosure] = useState<Closure>(closures[0]);
  const [options, setOptions] = useState<string[]>([]);

  const total = useMemo(() => {
    const selected = corsetOptions.filter((option) => options.includes(option.key));
    // Fabric cost is included in the base price; not charged separately
    const subtotal =
      type.price +
      closure.price +
      selected.reduce<number>((sum, item) => sum + item.price, 0);
    return Math.max(199, Math.round(subtotal));
  }, [type, closure, options]);

  function toggleOption(key: string) {
    setOptions((current) =>
      current.includes(key)
        ? current.filter((item) => item !== key)
        : [...current, key],
    );
  }

  function moveToMeasurements() {
    const optionsLabels = corsetOptions
      .filter((option) => options.includes(option.key))
      .map((option) => option.label);

    window.sessionStorage.setItem(
      "badlen-corset-build",
      JSON.stringify({
        corsetTypeLabel: type.label,
        fabricLabel: fabric.label,
        closureLabel: closure.label,
        optionsLabels,
        total,
      }),
    );

    router.push("/measurements-guide");
  }

  return (
    <div className="builder-grid">
      <div className="calc-panel">
        <h3>Тип корсета</h3>
        <div className="option-list">
          {corsetTypes.map((item) => (
            <button
              className={`option-button ${type.key === item.key ? "active" : ""}`}
              key={item.key}
              onClick={() => setType(item)}
              type="button"
            >
              {item.label} · {item.price} BYN
            </button>
          ))}
        </div>
      </div>
      <div className="calc-panel">
        <h3>Ткань</h3>
        <p className="caption">Стоимость ткани включена в цену корсета.</p>
        <div className="option-list">
          {fabrics.map((item) => (
            <button
              className={`option-button ${
                fabric.key === item.key ? "active" : ""
              }`}
              key={item.key}
              onClick={() => setFabric(item)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="calc-panel">
        <h3>Закрытие</h3>
        <div className="option-list">
          {closures.map((item) => (
            <button
              className={`option-button ${
                closure.key === item.key ? "active" : ""
              }`}
              key={item.key}
              onClick={() => setClosure(item)}
              type="button"
            >
              {item.label} · +{item.price} BYN
            </button>
          ))}
        </div>
      </div>
      <div className="calc-panel">
        <h3>Опции</h3>
        <div className="option-list">
          {corsetOptions.map((item) => (
            <button
              className={`option-button ${
                options.includes(item.key) ? "active" : ""
              }`}
              key={item.key}
              onClick={() => toggleOption(item.key)}
              type="button"
            >
              {item.label} · +{item.price} BYN
            </button>
          ))}
        </div>
      </div>
      <div className="calc-panel">
        <h3>Заказ</h3>
        <p>
          100% предоплата. Пошив 7–14 дней. Отправка по всей Беларуси —
          Белпочта (оплата при получении) или Автолайт (оплата клиентом).
        </p>
        <button className="button primary" onClick={moveToMeasurements} type="button">
          Перейти к меркам →
        </button>
        <a
          className="button ghost"
          href="/measurements-guide"
          style={{ marginTop: "0.5rem", display: "block", textAlign: "center" }}
        >
          Гайд по снятию мерок
        </a>
      </div>
      <div className="calc-panel">
        <h3>Итог</h3>
        <div className="total-box">
          <span>ориентировочная стоимость</span>
          <strong>{total} BYN</strong>
          <span>от 199 BYN · ткань включена</span>
        </div>
      </div>
    </div>
  );
}

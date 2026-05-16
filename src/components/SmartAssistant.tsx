"use client";

import { useState } from "react";
import { assistantAnswers } from "@/data/site";

const topics = [
  { key: "corset", label: "Корсет онлайн" },
  { key: "dresses", label: "Платья" },
  { key: "price", label: "Цены" },
  { key: "fabrics", label: "Ткани" },
  { key: "crm", label: "CRM" },
] as const;

export function SmartAssistant() {
  const [topic, setTopic] = useState<keyof typeof assistantAnswers>("corset");

  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Умный помощник</p>
        <h2>Быстрые ответы по пошиву и заказу</h2>
        <p>
          Здесь собраны короткие ответы на частые вопросы: как проходит заказ,
          где шьются платья, из чего складывается цена и как выбрать ткани.
        </p>
      </div>
      <div className="assistant-panel">
        <div className="assistant-tabs">
          {topics.map((item) => (
            <button
              className={`button ${topic === item.key ? "primary" : "ghost"}`}
              key={item.key}
              onClick={() => setTopic(item.key)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="assistant-answer">
          <h3>{topics.find((item) => item.key === topic)?.label}</h3>
          <p>{assistantAnswers[topic]}</p>
        </div>
      </div>
    </section>
  );
}

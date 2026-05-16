"use client";

import { FormEvent, useState } from "react";
import {
  deliveryOptions,
  measurementGuideFields,
  telegramHandle,
} from "@/data/site";
import { MeasurementSketch } from "@/components/MeasurementSketch";

type SavedBuild = {
  corsetTypeLabel: string;
  fabricLabel: string;
  closureLabel: string;
  optionsLabels: string[];
  total: number;
};

type SubmitState =
  | { status: "idle"; message: string }
  | { status: "loading"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  telegram: "",
  bust: "",
  braSize: "",
  underBust: "",
  waist: "",
  desiredTight: "",
  belly: "",
  hips: "",
  waistToUnderBust: "",
  notes: "",
  deliveryMethod: deliveryOptions[0].key,
  deliveryAddress: "",
  consent: false,
  paymentAccepted: false,
};

export function MeasurementsOrderForm() {
  const [form, setForm] = useState(initialState);
  const [build, setBuild] = useState<SavedBuild | null>(() => {
    if (typeof window === "undefined") return null;

    const raw = window.sessionStorage.getItem("badlen-corset-build");
    if (!raw) return null;

    try {
      return JSON.parse(raw) as SavedBuild;
    } catch {
      window.sessionStorage.removeItem("badlen-corset-build");
      return null;
    }
  });
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: `После отправки заявка придет администратору в Telegram ${telegramHandle}.`,
  });

  function updateField(name: keyof typeof initialState, value: string | boolean) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState({ status: "loading", message: "Отправляем заявку..." });

    try {
      const response = await fetch("/api/corset-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          build,
        }),
      });

      const payload = (await response.json()) as { error?: string; ok?: boolean };
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Не удалось отправить заявку.");
      }

      setSubmitState({
        status: "success",
        message: "Заявка отправлена. Проверьте Telegram администратора.",
      });
      setForm(initialState);
      window.sessionStorage.removeItem("badlen-corset-build");
      setBuild(null);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Не удалось отправить заявку.";
      setSubmitState({ status: "error", message });
    }
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <div className="calc-panel">
        <p className="eyebrow">1. Контакты</p>
        <div className="form-grid">
          <label>
            <span>Имя и фамилия</span>
            <input
              required
              type="text"
              value={form.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
            />
          </label>
          <label>
            <span>Телефон</span>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
            />
          </label>
          <label>
            <span>Telegram</span>
            <input
              type="text"
              value={form.telegram}
              onChange={(event) => updateField("telegram", event.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="calc-panel">
        <p className="eyebrow">2. Конфигурация</p>
        {build ? (
          <div className="build-summary">
            <p>
              <strong>Тип:</strong> {build.corsetTypeLabel}
            </p>
            <p>
              <strong>Ткань:</strong> {build.fabricLabel}
            </p>
            <p>
              <strong>Закрытие:</strong> {build.closureLabel}
            </p>
            <p>
              <strong>Опции:</strong>{" "}
              {build.optionsLabels.length > 0
                ? build.optionsLabels.join(", ")
                : "без доп. опций"}
            </p>
            <p>
              <strong>Ориентир:</strong> {build.total} BYN
            </p>
          </div>
        ) : (
          <p>
            Если вы пришли не из конструктора, заявка уйдет без конфигурации.
            Лучше сначала собрать корсет и только потом переходить к меркам.
          </p>
        )}
      </div>

      <div className="measurement-form-block">
        <div className="section-heading measurement-heading">
          <p className="eyebrow">3. Мерки</p>
          <h2>Заполните каждую мерку по карточке</h2>
          <p>
            Для overbust-корсета важны не только объемы, но и высота корпуса,
            привычный размер чашки и комфортная степень утяжки. Все поля ниже
            идут в той последовательности, в которой удобнее снимать мерки.
          </p>
        </div>

        <div className="measurement-card-grid">
          {measurementGuideFields.map((field) => {
            const key = field.key as keyof typeof initialState;
            const value = String(form[key] ?? "");
            const isTextarea = field.type === "textarea";

            return (
              <div
                className={`measurement-field-card${
                  isTextarea ? " measurement-field-card-wide" : ""
                }`}
                key={field.key}
              >
                <div className="measurement-card-top">
                  <span className="measurement-number">{field.number}</span>
                  <div>
                    <p className="eyebrow">Мерка</p>
                    <h3>{field.title}</h3>
                  </div>
                </div>

                {/* sketch hidden — replaced by numbered fields */}

                <div className="measurement-copy">
                  <p>{field.description}</p>
                  <span>{field.note}</span>
                </div>

                {isTextarea ? (
                  <label className="measurement-input-stack">
                    <span>Комментарий</span>
                    <textarea
                      rows={5}
                      placeholder={field.placeholder}
                      value={value}
                      onChange={(event) => updateField(key, event.target.value)}
                    />
                  </label>
                ) : (
                  <label className="measurement-input-stack">
                    <span>Значение</span>
                    <div className="measurement-input-row">
                      <input
                        required={"required" in field ? Boolean(field.required) : false}
                        type={field.type}
                        min={
                          field.type === "number" && "min" in field
                            ? field.min
                            : undefined
                        }
                        max={
                          field.type === "number" && "max" in field
                            ? field.max
                            : undefined
                        }
                        step={
                          field.type === "number" && "step" in field
                            ? field.step
                            : undefined
                        }
                        placeholder={field.placeholder}
                        value={value}
                        onChange={(event) => updateField(key, event.target.value)}
                      />
                      {"unit" in field && field.unit ? <em>{field.unit}</em> : null}
                    </div>
                  </label>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="calc-panel">
        <p className="eyebrow">4. Доставка</p>
        <div className="delivery-list">
          {deliveryOptions.map((option) => (
            <label className="delivery-option" key={option.key}>
              <input
                checked={form.deliveryMethod === option.key}
                name="deliveryMethod"
                type="radio"
                onChange={() => updateField("deliveryMethod", option.key)}
              />
              <div>
                <strong>{option.label}</strong>
                <span>{option.note}</span>
              </div>
            </label>
          ))}
        </div>
        <label className="textarea-label">
          <span>Полный адрес доставки</span>
          <textarea
            required
            rows={4}
            value={form.deliveryAddress}
            onChange={(event) => updateField("deliveryAddress", event.target.value)}
          />
        </label>
      </div>

      <div className="calc-panel">
        <p className="eyebrow">5. Подтверждение</p>
        <label className="check-row">
          <input
            checked={form.paymentAccepted}
            required
            type="checkbox"
            onChange={(event) => updateField("paymentAccepted", event.target.checked)}
          />
          <span>Подтверждаю 100% предоплату перед запуском заказа в пошив.</span>
        </label>
        <label className="check-row">
          <input
            checked={form.consent}
            required
            type="checkbox"
            onChange={(event) => updateField("consent", event.target.checked)}
          />
          <span>Согласна на обработку персональных данных для пошива и доставки.</span>
        </label>
        <div className={`submit-note ${submitState.status}`} style={{ lineHeight: "1.7", whiteSpace: "pre-line" }}>
          {submitState.status === "success" ? (
            <>
              <p>✅ Заявка принята!</p>
              <p>Мы свяжемся с вами в Telegram или по телефону для подтверждения заказа.</p>
              <p>Срок ответа — обычно несколько часов в рабочее время.</p>
              <a href="https://t.me/svadebnyeplatya_bot" style={{ color: "var(--rose-deep)" }}>
                Написать напрямую: @svadebnyeplatya_bot
              </a>
            </>
          ) : (
            submitState.message
          )}
        </div>
        <button
          className="button primary"
          disabled={submitState.status === "loading"}
          type="submit"
        >
          {submitState.status === "loading" ? "Отправляем..." : "Отправить заказ"}
        </button>
      </div>
    </form>
  );
}

import { NextResponse } from "next/server";

type OrderPayload = {
  fullName?: string;
  phone?: string;
  email?: string;
  telegram?: string;
  bust?: string;
  braSize?: string;
  underBust?: string;
  waist?: string;
  desiredTight?: string;
  belly?: string;
  hips?: string;
  waistToUnderBust?: string;
  notes?: string;
  deliveryMethod?: string;
  deliveryAddress?: string;
  consent?: boolean;
  paymentAccepted?: boolean;
  build?: {
    corsetTypeLabel: string;
    fabricLabel: string;
    closureLabel: string;
    optionsLabels: string[];
    total: number;
  } | null;
};

const ADMIN_CHAT_ID = process.env.TELEGRAM_ADMIN_CHAT_ID || "692965876";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function line(label: string, value?: string) {
  return `<b>${label}:</b> ${escapeHtml(value?.trim() || "—")}`;
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "Не настроен TELEGRAM_BOT_TOKEN на сервере." },
      { status: 500 },
    );
  }

  const payload = (await request.json()) as OrderPayload;
  if (!payload.fullName || !payload.phone || !payload.deliveryAddress) {
    return NextResponse.json(
      { error: "Заполните имя, телефон и адрес доставки." },
      { status: 400 },
    );
  }

  if (!payload.consent || !payload.paymentAccepted) {
    return NextResponse.json(
      { error: "Нужно подтвердить оплату и согласие на обработку данных." },
      { status: 400 },
    );
  }

  const buildBlock = payload.build
    ? [
        "<b>Конфигурация:</b>",
        line("Тип", payload.build.corsetTypeLabel),
        line("Ткань", payload.build.fabricLabel),
        line("Закрытие", payload.build.closureLabel),
        line(
          "Опции",
          payload.build.optionsLabels.length > 0
            ? payload.build.optionsLabels.join(", ")
            : "без доп. опций",
        ),
        line("Ориентир", `${payload.build.total} BYN`),
      ].join("\n")
    : "<b>Конфигурация:</b> не выбрана на сайте";

  const text = [
    "<b>Новая заявка BADLEN · корсет</b>",
    "",
    line("Имя", payload.fullName),
    line("Телефон", payload.phone),
    line("Email", payload.email),
    line("Telegram", payload.telegram),
    "",
    buildBlock,
    "",
    "<b>Мерки:</b>",
    line("Обхват груди", payload.bust),
    line("Размер бюстгальтера", payload.braSize),
    line("Под грудью", payload.underBust),
    line("Талия", payload.waist),
    line("Утяжка", payload.desiredTight),
    line("Живот", payload.belly),
    line("Бедра", payload.hips),
    line("Талия → под грудью", payload.waistToUnderBust),
    line("Комментарий", payload.notes),
    "",
    "<b>Доставка:</b>",
    line("Способ", payload.deliveryMethod),
    line("Адрес", payload.deliveryAddress),
    "",
    "<b>Подтверждения:</b>",
    line("100% предоплата", payload.paymentAccepted ? "да" : "нет"),
    line("Согласие на обработку", payload.consent ? "да" : "нет"),
  ].join("\n");

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: ADMIN_CHAT_ID,
      text,
      parse_mode: "HTML",
    }),
  });

  if (!response.ok) {
    const telegramError = await response.text();
    return NextResponse.json(
      { error: `Telegram API error: ${telegramError}` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

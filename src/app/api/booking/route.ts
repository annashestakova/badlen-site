import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, date, time, service } = body;

    if (!name || !phone || !date || !time) {
      return NextResponse.json({ error: "Заполните все поля" }, { status: 400 });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token) {
      console.error("TELEGRAM_BOT_TOKEN not set in environment");
      return NextResponse.json({ error: "Telegram не настроен (токен)" }, { status: 503 });
    }
    if (!chatId) {
      console.error("TELEGRAM_CHAT_ID not set — visit /api/telegram-setup to find your chat_id");
      return NextResponse.json({ error: "Telegram не настроен (chat_id)" }, { status: 503 });
    }

    const text =
      `🌸 <b>Новая запись BADLEN</b>\n\n` +
      `📅 <b>Дата:</b> ${date}\n` +
      `⏰ <b>Время:</b> ${time}\n` +
      `👤 <b>Имя:</b> ${name}\n` +
      `📞 <b>Телефон:</b> ${phone}\n` +
      `💐 <b>Услуга:</b> ${service || "не указана"}\n\n` +
      `_Ответьте на это сообщение для подтверждения записи_`;

    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    if (!tgRes.ok) {
      const err = await tgRes.text();
      console.error("Telegram error:", err);
      return NextResponse.json({ error: "Ошибка отправки в Telegram" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Booking error:", e);
    return NextResponse.json({ error: "Внутренняя ошибка" }, { status: 500 });
  }
}

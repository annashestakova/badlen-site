import { NextResponse } from "next/server";

/**
 * Visit /api/telegram-setup to find your Telegram chat_id.
 * Steps:
 * 1. Make sure TELEGRAM_BOT_TOKEN is set in Vercel env vars
 * 2. Send any message to your bot in Telegram
 * 3. Open https://badlen-site.vercel.app/api/telegram-setup
 * 4. Copy the "id" from the result and set it as TELEGRAM_CHAT_ID in Vercel
 */
export async function GET() {
  const token = process.env.TELEGRAM_BOT_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "TELEGRAM_BOT_TOKEN not set. Add it in Vercel → Settings → Environment Variables." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
    const data = await res.json() as {
      ok: boolean;
      result: Array<{ message?: { chat: { id: number; first_name?: string; username?: string } } }>;
    };

    if (!data.ok) {
      return NextResponse.json({ error: "Telegram API error", details: data }, { status: 502 });
    }

    if (!data.result?.length) {
      return NextResponse.json({
        instruction: "Сначала отправьте любое сообщение боту в Telegram, затем обновите эту страницу.",
        bot_token_set: true,
        updates: [],
      });
    }

    const chats = data.result
      .map((u) => u.message?.chat)
      .filter(Boolean)
      .map((c) => ({ id: c!.id, name: c!.first_name, username: c!.username }));

    const uniqueChats = [...new Map(chats.map((c) => [c.id, c])).values()];

    return NextResponse.json({
      instruction: "Скопируйте нужный id и добавьте его как TELEGRAM_CHAT_ID в Vercel → Settings → Environment Variables",
      chats: uniqueChats,
    });
  } catch (e) {
    return NextResponse.json({ error: "Fetch failed", details: String(e) }, { status: 500 });
  }
}

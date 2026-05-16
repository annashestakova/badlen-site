## BADLEN

Сайт ателье BADLEN на `Next.js 16` для свадебных и вечерних платьев в Бресте и онлайн-заказа корсетов по Беларуси.

## Локальный запуск

```bash
npm install
npm run dev
```

Открыть `http://localhost:3000`.

## Проверки

```bash
npm run lint
npm run build
```

## Переменные окружения

Для формы заказа корсета нужны:

```bash
TELEGRAM_BOT_TOKEN=
TELEGRAM_ADMIN_CHAT_ID=
```

Production env уже используются в Vercel. Для preview-окружения переменные пока не настроены.

## Деплой

Сайт деплоится на Vercel как проект `badlen-site`.

Полезные команды:

```bash
vercel
vercel --prod
vercel project inspect badlen-site
```

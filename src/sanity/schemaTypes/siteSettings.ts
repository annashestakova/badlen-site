import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Настройки сайта",
  type: "document",
  fields: [
    defineField({
      name: "heroImage",
      title: "Главная — фото в герое",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroTitle",
      title: "Главная — заголовок",
      type: "string",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Главная — подзаголовок",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "telegramHandle",
      title: "Telegram handle (со @)",
      type: "string",
      initialValue: "@svadebnyeplatya_bot",
    }),
    defineField({
      name: "phone",
      title: "Телефон",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Адрес в Бресте",
      type: "string",
    }),
    defineField({
      name: "workingHours",
      title: "Часы работы",
      type: "string",
      initialValue: "пн–вс, 14:30–18:00",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Настройки сайта" };
    },
  },
});

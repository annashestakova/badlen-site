import { defineField, defineType } from "sanity";

export const dress = defineType({
  name: "dress",
  title: "Платье",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Название модели",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Категория",
      type: "string",
      options: {
        list: [
          { title: "Свадебное", value: "wedding" },
          { title: "Вечернее", value: "evening" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "price",
      title: "Цена (например: от 1 300 BYN)",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Фото",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "gallery",
      title: "Дополнительные фото",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "silhouette",
      title: "Силуэт",
      type: "string",
      options: {
        list: ["А-силуэт", "Пышное", "Прямое", "Русалка", "Ампир", "Короткое", "Миди"],
      },
    }),
    defineField({
      name: "style",
      title: "Стиль",
      type: "string",
    }),
    defineField({
      name: "material",
      title: "Материал",
      type: "string",
    }),
    defineField({
      name: "details",
      title: "Детали (теги)",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "availability",
      title: "Доступность",
      type: "string",
      options: {
        list: [
          { title: "Под заказ", value: "Под заказ" },
          { title: "Индивидуальный пошив", value: "Индивидуальный пошив" },
          { title: "В наличии", value: "В наличии" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Описание",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "featured",
      title: "Показывать на главной",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", category: "category", price: "price", media: "image" },
    prepare({ title, category, price, media }) {
      const cat = category === "wedding" ? "Свадебное" : "Вечернее";
      return { title, subtitle: `${cat} · ${price ?? ""}`, media };
    },
  },
});

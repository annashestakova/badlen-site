import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Статья блога",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "URL (slug)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tag",
      title: "Тег",
      type: "string",
      options: {
        list: [
          { title: "Платья", value: "Платья" },
          { title: "Свадьба", value: "Свадьба" },
          { title: "Ателье", value: "Ателье" },
          { title: "Советы", value: "Советы" },
          { title: "Корсеты", value: "Корсеты" },
          { title: "Стиль", value: "Стиль" },
        ],
      },
    }),
    defineField({
      name: "excerpt",
      title: "Краткое описание (для карточки)",
      type: "text",
      rows: 3,
      validation: (r) => r.required().max(200),
    }),
    defineField({
      name: "coverImage",
      title: "Обложка статьи",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "content",
      title: "Текст статьи",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Обычный текст", value: "normal" },
            { title: "Заголовок H2", value: "h2" },
            { title: "Заголовок H3", value: "h3" },
          ],
          marks: {
            decorators: [
              { title: "Жирный", value: "strong" },
              { title: "Курсив", value: "em" },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", type: "string", title: "Alt текст" }),
            defineField({ name: "caption", type: "string", title: "Подпись" }),
          ],
        },
      ],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO заголовок (если отличается)",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO описание",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "publishedAt",
      title: "Дата публикации",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: { title: "title", tag: "tag", media: "coverImage" },
    prepare({ title, tag, media }) {
      return { title, subtitle: tag, media };
    },
  },
});

import { defineField, defineType } from "sanity";

export const corsetLook = defineType({
  name: "corsetLook",
  title: "Образ корсета",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Название",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "text",
      title: "Описание",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "image",
      title: "Фото",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "order",
      title: "Порядок",
      type: "number",
      initialValue: 1,
    }),
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});

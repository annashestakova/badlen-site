import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "@/sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "badlen-studio",
  title: "BADLEN Studio",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("BADLEN")
          .items([
            S.listItem().title("Блог").schemaType("blogPost").child(
              S.documentTypeList("blogPost").title("Статьи блога")
            ),
            S.listItem().title("Платья").schemaType("dress").child(
              S.documentTypeList("dress").title("Каталог платьев")
            ),
            S.listItem().title("Корсеты (фото)").schemaType("corsetLook").child(
              S.documentTypeList("corsetLook").title("Образы корсетов")
            ),
            S.divider(),
            S.listItem().title("Настройки сайта").schemaType("siteSettings").child(
              S.document().schemaType("siteSettings").documentId("siteSettings")
            ),
          ]),
    }),
    visionTool({ defaultApiVersion: "2024-01-01" }),
  ],
  schema: { types: schemaTypes },
  basePath: "/studio",
});

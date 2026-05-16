import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
// SanityImageSource is re-exported from the package root
type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0];

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

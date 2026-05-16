import { client } from "./client";

// ── Blog ──────────────────────────────────────────────────────────────────────

export async function getAllBlogPosts() {
  return client.fetch<
    Array<{
      _id: string;
      slug: { current: string };
      title: string;
      tag: string;
      excerpt: string;
      coverImage?: { asset: { _ref: string } };
      publishedAt: string;
    }>
  >(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id, slug, title, tag, excerpt, coverImage, publishedAt
    }`
  );
}

export async function getBlogPost(slug: string) {
  return client.fetch<{
    _id: string;
    title: string;
    slug: { current: string };
    tag: string;
    excerpt: string;
    coverImage?: { asset: { _ref: string } };
    content: unknown[];
    seoTitle?: string;
    seoDescription?: string;
    publishedAt: string;
  } | null>(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id, title, slug, tag, excerpt, coverImage, content,
      seoTitle, seoDescription, publishedAt
    }`,
    { slug }
  );
}

// ── Dresses ───────────────────────────────────────────────────────────────────

export async function getDresses(category?: "wedding" | "evening") {
  const filter = category
    ? `*[_type == "dress" && category == $category]`
    : `*[_type == "dress"]`;

  return client.fetch<
    Array<{
      _id: string;
      title: string;
      category: string;
      price?: string;
      image: { asset: { _ref: string } };
      silhouette?: string;
      style?: string;
      material?: string;
      details?: string[];
      availability?: string;
      description?: string;
      featured?: boolean;
    }>
  >(
    `${filter} | order(_createdAt asc) {
      _id, title, category, price, image, silhouette, style,
      material, details, availability, description, featured
    }`,
    category ? { category } : {}
  );
}

// ── Corset looks ──────────────────────────────────────────────────────────────

export async function getCorsetLooks() {
  return client.fetch<
    Array<{
      _id: string;
      title: string;
      text?: string;
      image: { asset: { _ref: string } };
      order: number;
    }>
  >(
    `*[_type == "corsetLook"] | order(order asc) { _id, title, text, image, order }`
  );
}

// ── Site settings ─────────────────────────────────────────────────────────────

export async function getSiteSettings() {
  return client.fetch<{
    heroImage?: { asset: { _ref: string } };
    heroTitle?: string;
    heroSubtitle?: string;
    telegramHandle?: string;
    phone?: string;
    address?: string;
    workingHours?: string;
  } | null>(
    `*[_type == "siteSettings"][0]`
  );
}

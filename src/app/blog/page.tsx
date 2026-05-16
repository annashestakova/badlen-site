import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllBlogPosts } from "@/sanity/queries";
import { urlFor } from "@/sanity/client";
import { blogPosts as staticPosts } from "@/data/site";

export const revalidate = 60; // ISR — обновлять каждую минуту

export const metadata: Metadata = {
  title: "Блог",
  description:
    "Советы по выбору свадебного платья, ателье в Бресте, пошив корсетов на заказ и другие полезные статьи.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  // Сначала пробуем Sanity, при ошибке — fallback на статику
  type PostItem = {
    slug: string;
    tag: string;
    title: string;
    excerpt: string;
    coverImage?: { asset: { _ref: string } } | null;
    staticCoverImage?: string;
    fromSanity?: boolean;
  };
  let posts: PostItem[] = [];

  try {
    const sanityPosts = await getAllBlogPosts();
    if (sanityPosts.length > 0) {
      posts = sanityPosts.map((p) => ({
        slug: p.slug.current,
        tag: p.tag,
        title: p.title,
        excerpt: p.excerpt,
        coverImage: p.coverImage,
        fromSanity: true,
      }));
    }
  } catch {
    // Sanity недоступен — используем статику
  }

  if (posts.length === 0) {
    posts = staticPosts.map((p) => ({
      slug: p.slug,
      tag: p.tag,
      title: p.title,
      excerpt: p.excerpt,
      staticCoverImage: "coverImage" in p ? (p as typeof p & { coverImage?: string }).coverImage : undefined,
      fromSanity: false,
    }));
  }

  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Блог</p>
          <h1>Полезные статьи</h1>
          <p className="page-subtitle">
            Отвечаем на вопросы до того, как вы их успели задать.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="blog-index-grid">
          {posts.map((post) => (
            <Link className="blog-index-card blog-card" href={`/blog/${post.slug}`} key={post.slug}>
              {post.coverImage && post.fromSanity && (
                <div className="blog-index-cover">
                  <Image
                    src={urlFor(post.coverImage!).width(800).height(450).url()}
                    alt={post.title}
                    width={800}
                    height={450}
                    sizes="(max-width: 720px) 100vw, 33vw"
                  />
                </div>
              )}
              {post.staticCoverImage && !post.fromSanity && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={post.staticCoverImage} alt={post.title} className="blog-card-cover" loading="lazy" />
              )}
              <p className="eyebrow">{post.tag}</p>
              <h2>{post.title}</h2>
              <p className="caption">{post.excerpt}</p>
              <span className="blog-card-link">Читать →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

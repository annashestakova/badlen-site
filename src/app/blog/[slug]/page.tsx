import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getAllBlogPosts, getBlogPost } from "@/sanity/queries";
import { urlFor } from "@/sanity/client";
import { blogPosts as staticPosts } from "@/data/site";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  try {
    const sanityPosts = await getAllBlogPosts();
    if (sanityPosts.length > 0) {
      return sanityPosts.map((p) => ({ slug: p.slug.current }));
    }
  } catch { /* fallback */ }
  return staticPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getBlogPost(slug);
    if (post) {
      return {
        title: post.seoTitle ?? post.title,
        description: post.seoDescription ?? post.excerpt,
        alternates: { canonical: `/blog/${slug}` },
      };
    }
  } catch { /* fallback */ }
  const post = staticPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt, alternates: { canonical: `/blog/${slug}` } };
}

// ── Portable Text components ───────────────────────────────────────────────
const ptComponents = {
  types: {
    image: ({ value }: { value: { asset: unknown; alt?: string; caption?: string } }) => (
      <figure className="blog-figure">
        <Image
          src={urlFor(value.asset as Parameters<typeof urlFor>[0]).width(1200).url()}
          alt={value.alt ?? ""}
          width={1200}
          height={800}
          sizes="(max-width: 900px) 100vw, 760px"
        />
        {value.caption && <figcaption>{value.caption}</figcaption>}
      </figure>
    ),
  },
};

// ── Legacy renderer for static posts ──────────────────────────────────────
function renderStatic(text: string) {
  return text.split("\n\n").map((block, i) => {
    if (block.startsWith("**") && block.endsWith("**")) {
      return <h2 key={i}>{block.replace(/^\*\*|\*\*$/g, "")}</h2>;
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i}>
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/^- /, "").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
          ))}
        </ul>
      );
    }
    return <p key={i} dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />;
  });
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  // Try Sanity first
  try {
    const post = await getBlogPost(slug);
    if (post) {
      const allPosts = await getAllBlogPosts();
      const related = allPosts.filter((p) => p.slug.current !== slug).slice(0, 3);

      return (
        <main>
          <article className="blog-article">
            <Link className="eyebrow" href="/blog" style={{ textDecoration: "none" }}>← Блог</Link>
            {post.coverImage && (
              <div className="blog-hero-img">
                <Image
                  src={urlFor(post.coverImage as Parameters<typeof urlFor>[0]).width(1400).height(700).url()}
                  alt={post.title}
                  width={1400}
                  height={700}
                  priority
                  sizes="(max-width: 900px) 100vw, 900px"
                />
              </div>
            )}
            <p className="eyebrow" style={{ marginTop: "1.5rem" }}>{post.tag}</p>
            <h1>{post.title}</h1>
            <p className="caption" style={{ marginBottom: "2.5rem" }}>{post.excerpt}</p>
            <div className="prose">
              <PortableText value={post.content as Parameters<typeof PortableText>[0]["value"]} components={ptComponents} />
            </div>
            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
              <Link className="button primary" href="/contacts">Записаться</Link>
            </div>
          </article>

          {related.length > 0 && (
            <section className="section muted">
              <div className="section-heading">
                <p className="eyebrow">Ещё статьи</p>
                <h2>Читайте также</h2>
              </div>
              <div className="blog-grid">
                {related.map((p) => (
                  <Link className="blog-card" href={`/blog/${p.slug.current}`} key={p.slug.current}>
                    <p className="eyebrow">{p.tag}</p>
                    <h3>{p.title}</h3>
                    <p className="caption">{p.excerpt}</p>
                    <span className="blog-card-link">Читать →</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>
      );
    }
  } catch { /* fallback to static */ }

  // Fallback — static posts from site.ts
  const post = staticPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  const related = staticPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const staticCover = "coverImage" in post ? (post as typeof post & { coverImage?: string }).coverImage : undefined;

  return (
    <main>
      <article className="blog-article">
        <Link className="eyebrow" href="/blog" style={{ textDecoration: "none" }}>← Блог</Link>
        <p className="eyebrow" style={{ marginTop: "1.5rem" }}>{post.tag}</p>
        <h1>{post.title}</h1>
        <p className="caption" style={{ marginBottom: "2.5rem" }}>{post.excerpt}</p>
        {staticCover && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={staticCover}
            alt={post.title}
            className="blog-hero-image"
            loading="eager"
          />
        )}
        <div className="prose">{renderStatic(post.content)}</div>
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
          <Link className="button primary" href="/contacts">Записаться</Link>
        </div>
      </article>
      {related.length > 0 && (
        <section className="section muted">
          <div className="section-heading">
            <p className="eyebrow">Ещё статьи</p>
            <h2>Читайте также</h2>
          </div>
          <div className="blog-grid">
            {related.map((p) => (
              <Link className="blog-card" href={`/blog/${p.slug}`} key={p.slug}>
                <p className="eyebrow">{p.tag}</p>
                <h3>{p.title}</h3>
                <p className="caption">{p.excerpt}</p>
                <span className="blog-card-link">Читать →</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

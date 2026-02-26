import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { BlogPostMeta } from "@/lib/blog";
import type { Language } from "@/lib/language";

export function PostCard({ post, language }: { post: BlogPostMeta; language: Language }) {
  return (
    <article className="rounded-xl2 border border-border bg-surface p-6 shadow-card">
      <p className="text-xs uppercase tracking-[0.14em] text-muted">
        {formatDate(post.date)} - {post.readingTime}
      </p>
      <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
      <p className="mt-3 text-sm text-muted">{post.description}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {language === "hu" ? "Cikk megnyitása" : "Read article"}
      </Link>
    </article>
  );
}

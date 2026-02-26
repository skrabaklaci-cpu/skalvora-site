import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { mdxComponents } from "@/components/blog/mdx-components";
import { getCurrentLanguage } from "@/lib/i18n";

export function generateStaticParams() {
  return getAllPosts("en").map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const { slug } = params;

  try {
    const post = getPostBySlug(slug, "en");

    return {
      title: post.title,
      description: post.description
    };
  } catch {
    return {
      title: "Post not found"
    };
  }
}

export default function BlogDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const language = getCurrentLanguage();
  const { slug } = params;

  try {
    const post = getPostBySlug(slug, language);

    return (
      <article className="section-shell py-16 sm:py-20">
        <p className="text-xs uppercase tracking-[0.14em] text-muted">
          {formatDate(post.date)} - {post.readingTime} - {post.author}
        </p>
        <h1 className="mt-3 max-w-4xl font-[var(--font-manrope)] text-4xl font-semibold leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 max-w-3xl text-muted">{post.description}</p>

        <div className="prose-content mt-10">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm]
              }
            }}
          />
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}

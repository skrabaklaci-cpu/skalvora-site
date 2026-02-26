import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { SectionHeading } from "@/components/ui/section-heading";
import { PostCard } from "@/components/blog/post-card";
import { getCurrentLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights from Skalvora on workflow audits, AI operations, and practical process optimization."
};

export default function BlogIndexPage() {
  const language = getCurrentLanguage();
  const posts = getAllPosts(language);

  return (
    <div className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Blog"
        title={
          language === "hu"
            ? "Gyakorlati gondolatok workflow optimalizálásról és AI operációról"
            : "Insights on workflow optimization and practical AI operations"
        }
        description={
          language === "hu"
            ? "Rövid, egyenes cikkek csapatoknak, akik jobb végrehajtást akarnak extra káosz nélkül."
            : "Short, direct articles for teams that need to improve execution quality without adding chaos."
        }
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} language={language} />
        ))}
      </div>
    </div>
  );
}

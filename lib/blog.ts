import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Language } from "@/lib/language";

function getPostsDirectory(language: Language) {
  return path.join(process.cwd(), "content/blog", language);
}

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readingTime: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

export function getAllPosts(language: Language = "en"): BlogPostMeta[] {
  const postsDirectory = getPostsDirectory(language);
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: String(data.title),
        description: String(data.description),
        date: String(data.date),
        author: String(data.author),
        readingTime: String(data.readingTime)
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export function getPostBySlug(slug: string, language: Language = "en"): BlogPost {
  const postsDirectory = getPostsDirectory(language);
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    author: String(data.author),
    readingTime: String(data.readingTime),
    content
  };
}

const rawPostModules = import.meta.glob("../content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function titleFromMarkdown(markdown, fallbackTitle) {
  const headingMatch = markdown.match(/^#\s+(.+)$/m);
  return headingMatch ? headingMatch[1].trim() : fallbackTitle;
}

function excerptFromMarkdown(markdown) {
  const lines = markdown.split("\n");

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("#")) continue;
    if (trimmed.startsWith("```")) continue;
    return trimmed;
  }

  return "";
}

function dateTextFromMarkdown(markdown) {
  const dateMatch = markdown.match(/^####\s+(.+)$/m);
  return dateMatch ? dateMatch[1].trim() : "";
}

function timestampFromDateText(dateText) {
  if (!dateText) return Number.NEGATIVE_INFINITY;

  const parsed = Date.parse(dateText);
  return Number.isNaN(parsed) ? Number.NEGATIVE_INFINITY : parsed;
}

function slugFromPath(path) {
  return path.split("/").pop().replace(/\.md$/, "");
}

function labelFromSlug(slug) {
  return slug.replace(/[-_]/g, " ");
}

export const BLOG_POSTS = Object.entries(rawPostModules)
  .map(([path, markdown]) => {
    const slug = slugFromPath(path);
    const dateText = dateTextFromMarkdown(markdown);
    return {
      slug,
      title: titleFromMarkdown(markdown, labelFromSlug(slug)),
      dateText,
      timestamp: timestampFromDateText(dateText),
      excerpt: excerptFromMarkdown(markdown),
      content: markdown,
    };
  })
  .sort((a, b) => {
    if (a.timestamp !== b.timestamp) {
      return b.timestamp - a.timestamp;
    }

    return b.slug.localeCompare(a.slug);
  });

export function getBlogPostBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

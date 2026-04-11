export const BLOG_POSTS = [
  {
    slug: "blog",
    label: "latest",
    file: "blog.md",
  },
];

export function getBlogPostBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

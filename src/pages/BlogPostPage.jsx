import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "../components/CodeBlock";
import { getBlogPostBySlug } from "../lib/blogPosts";

const rawAssetModules = import.meta.glob("../content/assets/*", {
  eager: true,
  import: "default",
});

const assetUrlByFilename = Object.fromEntries(
  Object.entries(rawAssetModules).map(([path, builtUrl]) => [
    path.split("/").pop(),
    builtUrl,
  ])
);

function resolveMarkdownImageSrc(src) {
  if (!src) return "";

  const normalized = src.replace(/^\.\//, "");

  if (
    normalized.startsWith("src/content/assets/") ||
    normalized.startsWith("../assets/") ||
    normalized.startsWith("assets/")
  ) {
    const filename = normalized.split("/").pop();
    return assetUrlByFilename[filename] || src;
  }

  return src;
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <article className="viewer" aria-live="polite">
        <p>
          <strong>Error:</strong> Unknown blog post.
        </p>
      </article>
    );
  }

  return (
    <article className="viewer" aria-live="polite">
      <p>
        <Link to="/blog">back to blog</Link>
      </p>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");

            if (!inline && match) {
              return <CodeBlock language={match[1]}>{String(children)}</CodeBlock>;
            }

            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          img({ src, alt }) {
            return (
              <img
                src={resolveMarkdownImageSrc(src)}
                alt={alt || ""}
                loading="lazy"
                className="post-image"
              />
            );
          },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

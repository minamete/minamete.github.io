import { Link, useSearchParams } from "react-router-dom";
import { BLOG_POSTS } from "../lib/blogPosts";

const POSTS_PER_PAGE = 5;

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawPage = Number(searchParams.get("page") || "1");
  const totalPages = Math.max(1, Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE));
  const currentPage = Number.isFinite(rawPage)
    ? Math.min(Math.max(rawPage, 1), totalPages)
    : 1;

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const postsForPage = BLOG_POSTS.slice(start, start + POSTS_PER_PAGE);

  function goToPage(page) {
    if (page <= 1) {
      setSearchParams({});
      return;
    }

    setSearchParams({ page: String(page) });
  }

  return (
    <section className="viewer">
      <h2>blog</h2>

      {postsForPage.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul className="blog-list">
          {postsForPage.map((post) => (
            <li key={post.slug} className="blog-item">
              <h3>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              {post.excerpt && <p>{post.excerpt}</p>}
            </li>
          ))}
        </ul>
      )}

      <div className="pagination" aria-label="Blog pagination">
        <button
          type="button"
          className="page-btn"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          previous
        </button>
        <span>
          page {currentPage} / {totalPages}
        </span>
        <button
          type="button"
          className="page-btn"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          next
        </button>
      </div>
    </section>
  );
}

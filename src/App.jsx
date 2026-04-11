import { Link, Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import LinksPage from "./pages/LinksPage";
import StatusPage from "./pages/StatusPage";
import resumePdf from "./pages/Resume___Laura_Cao.pdf";

function NotFoundPage() {
  return (
    <section className="viewer">
      <h2>Page not found</h2>
      <p>Choose one of the links above.</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="site-bg">
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />
      <div className="orb orb-c" aria-hidden="true" />

      <main className="app-shell">
        <header className="app-header">
          <h1>minamete</h1>
        </header>

        <nav className="top-nav" aria-label="Site navigation">
          <Link to="/about" className="nav-link">
            about
          </Link>
          <a href={resumePdf} className="nav-link" target="_blank" rel="noreferrer">
            resume
          </a>
          <Link to="/blog" className="nav-link">
            blog
          </Link>
          <Link to="/links" className="nav-link">
            links
          </Link>
          <Link to="/status" className="nav-link">
            status
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

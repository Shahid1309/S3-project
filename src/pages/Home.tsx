import { useState } from "react";
import BlogCard from "../components/BlogCard";
import { posts } from "../data/posts";

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <main className="page home-page">
      <section className="hero">
        <p className="hero-label">A Blog for Developers</p>
        <h1 className="hero-title">Ideas worth reading.</h1>
        <p className="hero-subtitle">
          Practical articles on React, TypeScript, CSS, and modern web tooling — written for developers who ship.
        </p>
      </section>

      <section className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      <section className="posts-grid">
        {filtered.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
}

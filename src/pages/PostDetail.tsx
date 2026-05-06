import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { posts } from "../data/posts";

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactElement[] = [];
  let key = 0;
  let codeBlock: string[] = [];
  let inCode = false;

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCode) {
        elements.push(<pre key={key++}><code>{codeBlock.join("\n")}</code></pre>);
        codeBlock = [];
        inCode = false;
      } else {
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      codeBlock.push(line);
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++}>{line.slice(3)}</h2>);
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(<p key={key++}><strong>{line.slice(2, -2)}</strong></p>);
    } else if (line.startsWith("> ")) {
      elements.push(<blockquote key={key++}>{line.slice(2)}</blockquote>);
    } else if (line.startsWith("- ")) {
      elements.push(<li key={key++}>{line.slice(2)}</li>);
    } else if (line.trim() === "") {
      elements.push(<br key={key++} />);
    } else {
      const formatted = line.replace(/`([^`]+)`/g, "<code>$1</code>");
      elements.push(<p key={key++} dangerouslySetInnerHTML={{ __html: formatted }} />);
    }
  }

  return elements;
}

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/" replace />;

  const otherPosts = posts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <main className="page post-detail-page">
      <div className="post-header">
        <Link to="/" className="back-link">← Back to all posts</Link>
        <span className="post-category-badge">{post.category}</span>
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          <span className="post-author">{post.author}</span>
          <span className="meta-dot">·</span>
          <span>{post.date}</span>
          <span className="meta-dot">·</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      <img src={post.coverImage} alt={post.title} className="post-cover" />

      <article className="post-content">
        {renderContent(post.content)}
      </article>

      {otherPosts.length > 0 && (
        <section className="related-posts">
          <h3 className="related-title">More articles</h3>
          <div className="related-grid">
            {otherPosts.map((p) => (
              <Link key={p.id} to={`/post/${p.slug}`} className="related-card">
                <img src={p.coverImage} alt={p.title} />
                <div className="related-card-body">
                  <span className="related-category">{p.category}</span>
                  <p className="related-post-title">{p.title}</p>
                  <span className="related-read">{p.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

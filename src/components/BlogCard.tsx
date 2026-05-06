import { Link } from "react-router-dom";
import type { Post } from "../data/posts";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="blog-card">
      <Link to={`/post/${post.slug}`} className="card-image-link">
        <img src={post.coverImage} alt={post.title} className="card-image" />
        <span className="card-category">{post.category}</span>
      </Link>
      <div className="card-body">
        <div className="card-meta">
          <span>{post.author}</span>
          <span className="meta-dot">·</span>
          <span>{post.date}</span>
          <span className="meta-dot">·</span>
          <span>{post.readTime}</span>
        </div>
        <h2 className="card-title">
          <Link to={`/post/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="card-excerpt">{post.excerpt}</p>
        <Link to={`/post/${post.slug}`} className="card-read-more">
          Read more →
        </Link>
      </div>
    </article>
  );
}

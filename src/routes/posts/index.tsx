import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
  component: Posts,
});

function Posts() {
  const posts = ["post1", "post2", "post3"];

  return (
    <div>
      {posts.map((post) => (
        <div key={post}>
          <Link to="/posts/$postId" params={{ postId: post }}>
            {post}
          </Link>
        </div>
      ))}
    </div>
  );
}

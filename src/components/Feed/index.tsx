import { FeedContainer } from "./styles";
import { PostCard } from "../PostCard";
import type { FeedPost } from "../../types/post";

interface FeedProps {
  posts: FeedPost[];
}

export function Feed({ posts }: FeedProps) {
  if (posts.length === 0) {
    return (
      <FeedContainer
        style={{ alignItems: "center", color: "#7c7c8a", marginTop: "3rem" }}
      >
        <p>Nenhum post ainda. Seja o primeiro a postar!</p>
      </FeedContainer>
    );
  }

  return (
    <FeedContainer>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </FeedContainer>
  );
}

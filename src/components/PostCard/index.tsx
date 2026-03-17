import type { FeedPost } from "../../types/post";
import {
  CardContainer,
  CardHeader,
  Avatar,
  UserInfo,
  Username,
  TimeLabel,
  ContentText,
  PostImage,
  HashtagsContainer,
  Hashtag,
} from "./styles";

interface PostCardProps {
  post: FeedPost;
}

export function PostCard({ post }: PostCardProps) {
  const formattedTime = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(post.createdAt));

  return (
    <CardContainer>
      <CardHeader>
        <Avatar>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z" />
          </svg>
        </Avatar>
        <UserInfo>
          <Username>@{post.username}</Username>
          <TimeLabel>{formattedTime}</TimeLabel>
        </UserInfo>
      </CardHeader>

      {post.text && <ContentText>{post.text}</ContentText>}

      {post.imageUrl && (
        <PostImage src={post.imageUrl} alt={`Post de ${post.username}`} />
      )}

      {post.hashtags.length > 0 && (
        <HashtagsContainer>
          {post.hashtags.map((tag) => (
            <Hashtag key={tag}>#{tag}</Hashtag>
          ))}
        </HashtagsContainer>
      )}
    </CardContainer>
  );
}

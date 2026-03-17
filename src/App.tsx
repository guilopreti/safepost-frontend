import { useState } from "react";
import { GlobalStyle } from "./global";
import { Header } from "./components/Header";
import { PostForm } from "./components/PostForm";
import { Feed } from "./components/Feed";
import { initialMockFeed } from "./mocks/feed";
import type { FeedPost } from "./types/post";

export function App() {
  const [username, setUsername] = useState("usuarioteste");
  const [posts, setPosts] = useState<FeedPost[]>(initialMockFeed);

  const handleAddNewPost = (newPost: FeedPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <>
      <GlobalStyle />
      <Header username={username} setUsername={setUsername} />

      <main
        style={{ maxWidth: "600px", margin: "2rem auto", padding: "0 1rem" }}
      >
        <PostForm username={username} onPostCreated={handleAddNewPost} />

        <Feed posts={posts} />
      </main>
    </>
  );
}

export default App;

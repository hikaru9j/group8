import { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar"; // Sidebar コンポーネントのインポートを想定しています。

// src/App.js
import Container from "@mui/material/Container";
import PostForm from "./components/PostForm";
import Timeline from "./components/Timeline";

const mockPosts = [
  { id: 1, author: "User1", content: "This is the first post" },
  { id: 2, author: "User2", content: "Here is another post" },
];

const App = () => {
  const [posts, setPosts] = useState(mockPosts);

  const handleNewPost = (newContent) => {
    const newPost = {
      id: posts.length + 1,
      author: "UserNew",
      content: newContent,
    };
    setPosts([...posts, newPost]);
  };

  return (
    <Container>
      <Sidebar />

      <PostForm onSubmit={handleNewPost} />
      <Timeline posts={posts} />
    </Container>
  );
};

export default App;

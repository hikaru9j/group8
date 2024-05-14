
import Sidebar from "./components/Sidebar"; // Sidebar コンポーネントのインポートを想定しています。
import Header from "./components/Header"; // Header コンポーネントのインポートを想定しています。

// src/App.js
import Container from "@mui/material/Container";
import PostForm from "./components/PostForm";
import Timeline from "./components/Timeline";

// const mockPosts = [
//   { id: 1, author: "User1", content: "This is the first post" },
//   { id: 2, author: "User2", content: "Here is another post" },
// ];

// const App = () => {
//   const [posts, setPosts] = useState(mockPosts);

//   const handleNewPost = (newContent) => {
//     const newPost = {
//       id: posts.length + 1,
//       author: "UserNew",
//       content: newContent,
//     };
//     setPosts([...posts, newPost]);
//   };

//   return (
//     <Container>
//       <Sidebar />
//       <PostForm onSubmit={handleNewPost} />
//       <Timeline posts={posts} />
//     </Container>
//   );
// };

// export default App;

import { useEffect, useState } from "react";
import "./reset.css";
import { Button, Card, CardContent, Typography, TextField, Box, Chip } from "@mui/material"; 
import "./App.css";

const TAGS = ["生活", "勉強", "試験", "就活", "結婚", "受験"];

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json));
  }, []);

  const removeTag = (indexToRemove) => {
    setTags((prevTags) => prevTags.filter((_, index) => index !== indexToRemove));
  };

  return (
  <div>
    <Header />
    <Sidebar />
    
    <div className="container"> 
      <div className="input-container">
      {/* <input
        style={{
          height: "200px",
          width: "%",
          outline: "black solid 1px",
        }}
        type="text"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      /> */}
      <TextField // Changed: input から TextField へ変更
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="内容を入力してください"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
      </div>
{/*削除機能をつける前のコード */}
      {/* <div>
        {tags.map((tag, index) => (
          <span key={index}>#{tag} </span>
        ))}
      </div> */}

      <div>
        {tags.map((tag, index) => (
          <span key={index}>
            #{tag} <span onClick={() => removeTag(index)} style={{cursor: 'pointer', color: 'red'}}>×</span>
          </span>
        ))}
      </div>

      <select
        onChange={(e) => {
          if (e.target.value !== "") {
            setTags((prev) => [...prev, e.target.value]);
          }
        }}
      >
        <option value="">選択してください</option>
        {TAGS.map((tag, index) => {
          return (
            <option key={index} value={tag}>
              {tag}
            </option>
          );
        })}
      </select>

      <Button variant="contained"
      sx={{ backgroundColor: '#89cfeb' , color: '#4d5156' }}
        onClick={() => {
          fetch("http://localhost:3300/posts", {
            method: "POST",
            body: JSON.stringify({
              content: content,
              author: "author",
              tags: tags,
            }),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });
        }}
        style={{
          outline: "black solid 1px",
          float: "right",
        }}
      >
        投稿を追加
      </Button>

      <div>
        {posts.map((post, index) => {
          return (
            <div className="card" key={post.id}>
              {post.id}:{post.content}:{post.author}:
              {post.tags.map((tag, idx) => (
                <span key={idx}>#{tag} </span>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  </div>
  );
};

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import PostsList from "./components/PostsList";
import PostCard from "./components/PostCard";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/post/:postId" element={<PostCard token={token} />} />
        <Route path="/posts" element={<PostsList token={token} />} />
      </Routes>
    </>
  );
}

export default App;

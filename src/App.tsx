import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <footer className="footer">
          <p>© 2025 DevBlog · Built with React & TypeScript</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

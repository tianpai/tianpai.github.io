import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "@/component/pages/homepage";
import { ProjectPage } from "@/component/pages/projects";
import { BlogPage } from "@/component/pages/blog";
import { BlogPostPage } from "@/component/pages/blog-post";
import About from "@/component/pages/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

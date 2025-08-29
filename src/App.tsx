import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("@/component/pages/homepage").then(module => ({ default: module.HomePage })));
const ProjectPage = lazy(() => import("@/component/pages/projects").then(module => ({ default: module.ProjectPage })));
const BlogPage = lazy(() => import("@/component/pages/blog").then(module => ({ default: module.BlogPage })));
const BlogPostPage = lazy(() => import("@/component/pages/blog-post").then(module => ({ default: module.BlogPostPage })));
const About = lazy(() => import("@/component/pages/about"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "@/component/pages/homepage";
import { ProjectPage } from "@/component/pages/projects";
import { ProjectPage as WritingsPage } from "@/component/pages/writtings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/writings" element={<WritingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
